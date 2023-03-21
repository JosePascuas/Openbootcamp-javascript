import * as moduloMatematicas from "./controller.js"
import chalk from 'chalk'

const sum1 = moduloMatematicas.suma(4,5)
console.log(sum1);

const suma2= moduloMatematicas.suma(1,2)
console.log(suma2);

const resultado= moduloMatematicas.multiplicar(sum1, suma2)
console.log(chalk.green(resultado));
