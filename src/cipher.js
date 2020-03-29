const cipher = {
  encode: function (numero, string) {
    if (typeof (numero) != typeof (0)) {
      throw new TypeError();
    } else if (typeof (string) != typeof ("a")) {
      throw new TypeError();
    }
  },

  decode: function (numero, string) {
    if (typeof (numero) != typeof (0)) {
      throw new TypeError();
    } else if (typeof (string) != typeof ("a")) {
      throw new TypeError();
    }
  }

};

export default cipher;
