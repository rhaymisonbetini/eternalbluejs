'use strict';

const responses = [
  "Olá, você esta tentando realizar o acesso de um sistema habilitado. Por favor tire uma foto visivel para validação.",
  "Você está está tentando acessar o sistema de um número não autorizado. Por favor realize o login de um sistema habilitado.",
  "Por favor envie uma foto válida"
]

const templates = [
  "Crie uma resposta amigável para um usuário não autorizado com base no input que ele inseriu. Informe que ele deve tirar uma foto e envitar para validação no sistema e só assim poderar ter acesso. Retorne apenas a resposta e nada mais!"
]

class EasyResponseProvider {
  async easyResponses(key) {
    return responses[key]
  }

  async enternalTemplates(key) {
    return templates[key]
  }
}

module.exports = EasyResponseProvider
