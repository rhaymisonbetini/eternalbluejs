'use strict';

const responses = [
  "Olá, você esta tentando realizar o acesso de um sistema habilitado. Por favor tire uma foto visivel para validação.",
  "Você está está tentando acessar o sistema de um número não autorizado. Por favor realize o login de um sistema habilitado.",
  "Por favor envie uma foto válida",
]

const awaitSimulateHumans = [
  "Um momento enquanto analiso isso para você. 🤓",
  "Só um instante, estou processando a informação anterior. 🔄",
  "Dê-me um segundinho para checar isso... 🔍",
  "Segura aí, rapidinho que eu vou verificar as informações! 🏃‍♂️💨",
  "Um minutinho e já te respondo! ⏳",
  "Estou quase pronto, só conferindo algumas coisas aqui! 🕵️‍♂️",
]

const invalidNumberSequenceMessages = [
  "Parece que a sequência numérica que você inseriu é inválida. Por favor, insira apenas números, sem pontuação ou caracteres especiais.",
  "Ops! A sequência que você digitou não é válida. Lembre-se de usar apenas números, sem espaços, letras ou símbolos.",
  "A sequência numérica fornecida não está correta. Certifique-se de digitar apenas números, evitando qualquer tipo de pontuação ou caracteres não numéricos."
];


const templates = [
  "Crie uma resposta amigável de forma humana e natural para um usuário não autorizado. Informe que ele deve tirar uma foto  e enviar pela conversa para validação no sistema, caso contrario ele nao podera ter acesso. Retorne apenas a resposta e nada mais!", //0
  "Crie uma resposta amigável de forma humana e natural de boas vindas a um usuário de um aparelho autorizado no sistema.Informe que o aparelho do qual ele esta falando esta autorizado e informe que ele deve tirar uma foto  e enviar pela conversa  para a validação no sistema e só assim poderar ter acesso. Crie a resposta com base no nas informações ou duvidas passadas pelo usuário perguntando ou informando no sistema Retorne apenas a resposta e nada mais!", //1
  "Crie uma resposta informando de forma humana e natural de que o usuário esta entrando em contato de um aparelho não autorizado e que ele deve acessar o sistema de um aparelho autorizado. Retorne apenas a resposta e enada mais!",//2
  "Crime uma resposta de forma humana e natural de agradecendo o envio da foto e informe que a foto foi validada com sucesso. Solicite que o usuário confirme os ultimos tres digitos do documento cadastrado no sistema. Retorne apenas a resposta e enada mais!", //3
  "Crie uma resposta  de forma humana e natural de boas vindas ao  ao eternal blue  para o usuário validado e informado no contexto. Solicite para que ele escolha qual contexto ele deseja obter informações sobre sua empresa: 1 - Informações do sistema, 2 - Enviar documentos para analise. Também informa que o contexto pode ser mudado a qualquer momento, masta enviar : contexto {numero da opcao} ", //4
  "Crie uma resposta de forma humana e natural de informando que a foto não corresponte a de um usuário autorizado no sistema. Retorne apenas a resposta e enada mais!", //5
  "Crie uma resposta  informando ao usuário do sistema que as informação nao correspondem  a nenhuma documento registrado na base de informações. Retorne apenas a resposta e enada mais!", //6
]

class EasyResponseProvider {
  async easyResponses(key) {
    return responses[key]
  }

  async awaitRandomResponse() {
    return awaitSimulateHumans[Math.floor(Math.random() * awaitSimulateHumans.length)]
  }

  async awaitRandomValidationDocument(){
    return invalidNumberSequenceMessages[Math.floor(Math.random() * invalidNumberSequenceMessages.length)]
  }

  async enternalTemplates(key) {
    return templates[key]
  }
}

module.exports = EasyResponseProvider
