require('dotenv').config()
const {IncomingWebhook} = require('@slack/webhook')
const webhook = new IncomingWebhook(process.env.SWHOOK)

const loggerStream = {
    write: message => {
       webhook.send({
        text: message
       })
    },
  };
  
module.exports=loggerStream;