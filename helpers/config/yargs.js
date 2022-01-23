const { boolean, number } = require("yargs");

const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Base de la tabla de multriplicar",
  })
  .options("l", {
    alias: "listar",
    type: boolean,
    default: false,
    describe: "Muestra la tabla de multriplicar",
  })
  .options("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    describe: "Indica hasta que numero desea hacer la multriplicacion",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw new Error("La base tiene que ser numerica");
    } else {
      return true;
    }
  }).argv;

module.exports = argv;
