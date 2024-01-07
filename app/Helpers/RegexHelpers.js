'use strict';

class RegexHelpers {
  async isOnlyNumbers(str) {
    return /^\d+$/.test(str);
  }
}

module.exports = RegexHelpers;
