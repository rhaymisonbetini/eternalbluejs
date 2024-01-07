'use strict';
const Env = use("Env")
const axios = require('axios');
const URL = 'http://localhost:8000/api/v1'

class EternalBlueService {

  constructor() {
    this.headers = {
      'Authorization': `Token ${Env.get('ETERNAL_BLUE_TOKEN')}`,
      'Content-Type': 'application/json',
    }
    this.config = {
      method: 'post',
      maxBodyLength: Infinity,
      headers: this.headers,
      url: "",
      data: ""
    }
  }

  async authface(face) {
    this.config.data = {"face": face}
    this.config.url = URL + '/authface/'
    let enternalResponse = await axios.request(this.config)
    return enternalResponse.data.message
  }

  async autorizationResponses(template, userMessage) {
    this.config.data = {"question": template, "input": userMessage}
    this.config.url = URL + '/simpleBode/'
    let enternalResponse = await axios.request(this.config)
    return enternalResponse.data.response.replace('"', '')
  }

}

module.exports = EternalBlueService
