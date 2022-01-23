const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base, listar, hasta) => {
  try {
    let data = "";
    let consola = "";
    for (let index = 1; index <= hasta; index++) {
      data += `${base}x${index}=${base * index}\n`;
      consola += `${base}${"x".green}${index}${"=".green} ${base * index}\n`;
    }
    if (listar) {
      console.log("================================".green);
      console.log("Tabla del :".bgBlack.green + colors.blue(base));
      console.log("================================".green);
      console.log(consola);
    }

    fs.writeFileSync(`./salida/Tabla-del-${base}.txt`, data);
    return `Tabla-del-${base}.txt`.bgBlack.blue;
  } catch (error) {
    throw error;
  }
};

module.exports = { crearArchivo };
