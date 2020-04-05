const cipher = {
  encode: function (offset, phrase) {
    validateParametersType(offset, phrase);
    let encodePhrase = "";
    for (let i = 0; i < phrase.length; i++) {
      let encodeResultAccent = removeAccent(phrase[i]);
      let valueChar = encodeResultAccent.charCodeAt();
      if (valueChar >= 65 && valueChar <= 90) {
        let result = ((valueChar - 65 + offset) % 26) + 65;
        encodePhrase += String.fromCharCode(result);
      } else if (valueChar >= 97 && valueChar <= 122) {
        let result = ((valueChar - 97 + offset) % 26) + 97;
        encodePhrase += String.fromCharCode(result);
      } else {
        encodePhrase += encodeResultAccent;
      }
    }
    return encodePhrase;
  },

  decode: function (offset, phrase) {
    validateParametersType(offset, phrase);
    let decodePhrase = "";
    for (let i = 0; i < phrase.length; i++) {
      let decodeResultAccent = removeAccent(phrase[i]);
      let valueChar = decodeResultAccent.charCodeAt();
      if (valueChar >= 65 && valueChar <= 90) {
        let result = (valueChar - 90 - offset) % 26 + 90;
        decodePhrase += String.fromCharCode(result);
      } else if (valueChar >= 97 && valueChar <= 122) {
        let result = (valueChar - 122 - offset) % 26 + 122;
        decodePhrase += String.fromCharCode(result);
      } else {
        decodePhrase += decodeResultAccent;
      }
    }
    return decodePhrase;
  },
};

function validateParametersType (offset, phrase) {
  if (typeof (offset) != typeof (0)) {
    throw new TypeError();
  } else if (typeof (phrase) != typeof ("a")) {
    throw new TypeError();
  }
}

function removeAccent(letter) {
  const alphaAccent = "ÇçÑñÄÅÁÂÀÃãâäàåáÊËÈÉéêëèÍÎÏÌïîìíÖÓÔÒÕõôöòóÜÚÛÙüûùúÝŸÿý";
  const convertAlphaAccent = "CcNnAAAAAAaaaaaaEEEEeeeeIIIIiiiiOOOOOoooooUUUUuuuuYYyy";

  let valueI = alphaAccent.indexOf(letter);
  let convertLetter = "";
  if (valueI >= 0) {
      convertLetter = convertAlphaAccent.substr(valueI, 1);
  } else {
      convertLetter = letter;
  }
  return convertLetter;
}

export default cipher;
