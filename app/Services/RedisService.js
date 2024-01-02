'use strict';
const Redis = use('Redis')

class RedisService {

  async getConversation(key) {
    return await Redis.get(key)
  }

  asyns

  async setConversation(key, value) {
    return await Redis.set(key, JSON.stringify(value))
  }

}

module.exports = RedisService
