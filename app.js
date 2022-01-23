const { crearArchivo } = require("./helpers/multriplicar");
const argv = require("./helpers/config/yargs");

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => {
    console.log(nombreArchivo, "Creado");
  })
  .catch((err) => {
    console.log(err);
  });
