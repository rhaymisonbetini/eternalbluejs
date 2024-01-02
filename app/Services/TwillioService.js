'use strict';
const Env = use("Env")
const accountSid = '';
const authToken = '';
const client = require('twilio')(accountSid, authToken);
const axios = require('axios');

class TwillioService {

   sendTwillioResponse(to,from,message){
    client.messages.create({
      body: message,
      from: to,
      to: from
    }).then(r => console.log('_'))
  }

  async downloadImageAndConvertToBase64(mediaUrl) {
    try {
      const response = await axios({
        method: 'get',
        url: mediaUrl,
        responseType: 'arraybuffer',
        auth: {
          username: accountSid,
          password: authToken
        }
      });

      return Buffer.from(response.data, 'binary').toString('base64');
    } catch (error) {
      console.error('Erro ao baixar a imagem:', error);
      throw error;
    }
  }
}

module.exports = TwillioService
