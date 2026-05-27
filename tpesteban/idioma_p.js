const fs = require("fs");

const frase = fs.readFileSync(0, "utf8").replace(/\r?\n$/, "");
const vocales = "aeiou";
let traducida = "";

for (let i = 0; i < frase.length; i++) {
  const caracter = frase.charAt(i);
  traducida += caracter;

  if (vocales.includes(caracter.toLowerCase())) {
    traducida += "p" + caracter.toLowerCase();
  }
}

console.log(traducida);
