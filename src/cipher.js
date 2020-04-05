const cipher = {
  encode: function (offset, phrase) {
    if (typeof (offset) != typeof (0)) {
      throw new TypeError();
    } else if (typeof (phrase) != typeof ("a")) {
      throw new TypeError();
    }

    let encodePhrase = "";

    for (let i = 0; i < phrase.length; i++) {
      let valueChar = phrase[i].charCodeAt();
      if (valueChar >= 65 && valueChar <= 90) {
        let result = ((valueChar - 65 + offset) % 26) + 65;
        encodePhrase += String.fromCharCode(result);
      } else if (valueChar >= 97 && valueChar <= 122) {
        let result = ((valueChar - 97 + offset) % 26) + 97;
        encodePhrase += String.fromCharCode(result);
      } else {
        encodePhrase += phrase[i];
      }
    }
    return encodePhrase;
  },

  decode: function (offset, phrase) {
    if (typeof (offset) != typeof (0)) {
      throw new TypeError();
    } else if (typeof (phrase) != typeof ("a")) {
      throw new TypeError();
    }

    let decodePhrase = "";

    for (let i = 0; i < phrase.length; i++) {
      let valueChar = phrase[i].charCodeAt();

      if (valueChar >= 65 && valueChar <= 90) {
        let result = (valueChar - 90 - offset) % 26 + 90;
        decodePhrase += String.fromCharCode(result);
      } else if (valueChar >= 97 && valueChar <= 122) {
        let result = (valueChar - 122 - offset) % 26 + 122;
        decodePhrase += String.fromCharCode(result);
      } else {
        decodePhrase += phrase[i];
      }
    }
    return decodePhrase;
  },
};

export default cipher;
