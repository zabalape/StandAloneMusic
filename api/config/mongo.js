const mongoose = require('mongoose');
require('dotenv').config();
const dbConnect = () => {
  const DB_URI = process.env.DB_URI;
  mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('**** Conexión exitosa a MongoDB');
  })
  .catch((error) => {
    console.log('**** ERROR DE CONEXION MDB_CONNECT:', error);
  });
};

module.exports = dbConnect;
