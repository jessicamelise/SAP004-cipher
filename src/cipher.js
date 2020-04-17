const cipher = {
  encode: function (offset, phrase) {
    validateParametersType(offset, phrase);
    let encodePhrase = "";
    for (let letter of phrase) {
      let encodeResultAccent = removeAccent(letter);
      let encodeAscCode = transformToAscCode(encodeResultAccent);
      if (compareUpperCase(encodeAscCode)) {
        let encodeLetter = resultEncodeUpperCase(encodeAscCode, offset);
        encodePhrase += String.fromCharCode(encodeLetter);
      } else if (compareLowerCase(encodeAscCode)) {
        let encodeLetter = resultEncodeLowerCase(encodeAscCode, offset);
        encodePhrase += String.fromCharCode(encodeLetter);
      } else {
        encodePhrase += letter;
      }
    }
    return encodePhrase;
  },

  decode: function (offset, phrase) {
    validateParametersType(offset, phrase);
    let decodePhrase = "";
    for (let letter of phrase) {
      let decodeResultAccent = removeAccent(letter);
      let decodeAscCode = transformToAscCode(decodeResultAccent);
      if (compareUpperCase(decodeAscCode)) {
        let decodeLetter = resultDecodeUpperCase(decodeAscCode, offset);
        decodePhrase += String.fromCharCode(decodeLetter);
      } else if (compareLowerCase(decodeAscCode)) {
        let decodeLetter = resultDecodeLowerCase(decodeAscCode, offset);
        decodePhrase += String.fromCharCode(decodeLetter);
      } else {
        decodePhrase += letter;
      }
    }
    return decodePhrase;
  }
}

const ascCodeBigA = "A".charCodeAt();
const ascCodeSmallA = "a".charCodeAt();
const ascCodeBigZ = "Z".charCodeAt();
const ascCodeSmallZ = "z".charCodeAt()
const alphabetSize = ascCodeBigZ - ascCodeBigA + 1;

function validateParametersType(offset, phrase) {
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

function resultEncodeUpperCase(code, offset) {
  let result = ((code - ascCodeBigA + offset) % alphabetSize) + ascCodeBigA;
  return result;
}

function resultEncodeLowerCase(code, offset) {
  let result = ((code - ascCodeSmallA + offset) % alphabetSize) + ascCodeSmallA;
  return result;
}

function resultDecodeUpperCase(code, offset) {
  let result = ((code - ascCodeBigZ - offset) % alphabetSize) + ascCodeBigZ;
  return result;
}

function resultDecodeLowerCase(code, offset) {
  let result = ((code - ascCodeSmallZ - offset) % alphabetSize) + ascCodeSmallZ;
  return result;
}

function transformToAscCode(letter) {
  let valueAsc = letter.charCodeAt();
  return valueAsc;
}

function compareUpperCase(value) {
  let compare = value >= ascCodeBigA && value <= ascCodeBigZ;
  return compare;
}

function compareLowerCase(value) {
  let compare = value >= ascCodeSmallA && value <= ascCodeSmallZ;
  return compare;
}

export default cipher;
