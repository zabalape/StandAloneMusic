const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');
const TrackScheme = new mongoose.Schema({
    name:{
        type: String
    },
    album:{
        type: String,
    },
    cover: {
        type: String,
        validate:{
            validator: (req) =>{return true;}
        },
        message: 'ERROR_URL'
    },
    artist:{
        name: {
            type: String,
        },
        nickname: {
            type: String,
        },
        nationality: {
            type: String,
        },

    },
    duration:{
        start:{
            type: String,
        },
        end: {
            type: String,
        }
    },
    mediaId:{
        type: mongoose.Types.ObjectId
    }
},
{
    timestamps: true,
    versionKey: false
})

TrackScheme.plugin(mongooseDelete, {overrideMethods: 'all'})

TrackScheme.statics.findAllData = function(id) {
    const joinData = this.aggregate([
        {
        $lookup: {
          from: 'storages',
          localField: 'mediaId',
          foreignField: '_id',
          as: 'audio'
        },
      },{
        $unwind:'$audio'
      }]);
    return joinData;
  };


TrackScheme.statics.findOneData = function(id) {
    const joinData = this.aggregate([
        {
            $match:{
                _id: new mongoose.Types.ObjectId(id)
            }
          },
        {
        $lookup: {
          from: 'storages',
          localField: 'mediaId',
          foreignField: '_id',
          as: 'audio'
        },
      },{
        $unwind:'$audio'
      }]);
    return joinData;
  };

  


module.exports = mongoose.model('tracks',TrackScheme)