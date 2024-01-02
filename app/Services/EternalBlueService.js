'use strict';
const axios = require('axios');

class EternalBlueService {

  constructor() {
    this.headers = {
      'Authorization': 'Token ',
      'Content-Type': 'application/json',
    }
    this.config = {
      method: 'post',
      maxBodyLength: Infinity,
      headers: this.headers,
      url: 'http://localhost:8000/api/v1/simpleBode/',
      data: ""
    }
  }

  async unathorizedResponses(template, userMessage) {
    this.config.data = {"question": template, "input": userMessage}
    let enternalResponse = await axios.request(this.config)
    return enternalResponse.data.response
  }

}

module.exports = EternalBlueService
