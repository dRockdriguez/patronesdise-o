class EncoderTextAbstraction {
  constructor(encoder) {
    this.encoder = encoder;
  }

  encode(str) {
    return this.encoder.encode(str);
  }

  decode(str) {
    return this.encoder.decode(str);
  }
}

class Base64EncoderImplementor {
  encode(str) {
    return window.btoa(str);
  }

  decode(str) {
    return window.atob(str);
  }
}

class HTMLEncoderImplementor {
  encode(str) {
    return str.split(/\./g).reduce((acc, el) => {
      return acc + (el.trim() ? `<p>${el.trim()}</p>` : "");
    }, "");
  }

  decode(str) {
    return str.split("</p>").reduce((acc, el) => {
        const phrase = el.replaceAll("<p>", "");
      return acc + (phrase.trim() ? `${phrase.trim()}. ` : "");
    }, "");
  }
}

const base64Encoder = new EncoderTextAbstraction(
  new Base64EncoderImplementor()
);
console.log(base64Encoder.encode("Hola mundo!"));
console.log(base64Encoder.decode("SG9sYSBtdW5kbyE="));

const htmlEncoder = new EncoderTextAbstraction(new HTMLEncoderImplementor());

console.log(
  htmlEncoder.encode(
    "Hola. Que tal estás?. Esto es una prueba. A ver si funciona."
  )
);

console.log(
  htmlEncoder.decode(
    "<p>Hola</p><p>Que tal estás?</p><p>Esto es una prueba</p><p>A ver si funciona</p>"
  )
);
