'use strict';
const Env = use("Env")
const accountSid = Env.get('TWILLIO_SID');
const authToken = Env.get('TWILIO_AUTH_TOKEN');
const client = require('twilio')(accountSid, authToken);
const axios = require('axios');

class TwillioService {

  sendTwillioResponse(to, from, message) {
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
      const base64Data = Buffer.from(response.data, 'binary').toString('base64');
      return `data:image/jpeg;base64,${base64Data}`;
    } catch (error) {
      console.error('Erro ao baixar a imagem:', error);
      throw error;
    }
  }
}

module.exports = TwillioService
