const cipher = {
  encode: function (offset, phrase) {
    if (typeof (offset) != typeof (0)) {
      throw new TypeError();
    } else if (typeof (phrase) != typeof ("a")) {
      throw new TypeError();
    }

    let encodePhrase = "";

    for (let i = 0; i < phrase.length; i++) {
      let valueI = phrase[i].toUpperCase();
      let valueChar = valueI.charCodeAt();
      let result = ((valueChar - 65 + offset) % 26) + 65;
      encodePhrase += String.fromCharCode(result);
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
      let valueI = phrase[i].toUpperCase();
      let valueChar = valueI.charCodeAt();
      let result = ((valueChar - 65 - offset) % 26);
      if (result < 0) {
        result += 26 + 65;
        decodePhrase += String.fromCharCode(result);
      } else {
        result += 65;
        decodePhrase += String.fromCharCode(result);
      }
    }
    return decodePhrase;
  },
};


export default cipher;
