'use strict';
const Redis = use('Redis')

class RedisService {

  async getConversation(key) {
    return await Redis.get(key)
  }
  async setConversation(key, value) {
    return await Redis.set(key, JSON.stringify(value))
  }

  async setAwaitingMessage(key){
    return await Redis.set(key, 'awaiting')
  }

  async finalValidations(key){
    return await Redis.set(`${key}_doc_validation`, 'doc_validation')
  }

  async getFinalValidations(key){
    return await Redis.get(`${key}_doc_validation`)
  }

  async removeConversation(key) {
    return await Redis.del(key)
  }

  async flushAll(){
    return await Redis.flushall()
  }

}

module.exports = RedisService
