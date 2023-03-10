function sinParametros() {
  return true
}

console.log(sinParametros());

async function palabra() {
  console.log("la funcion ha empezado");
  await new Promise(resolve => setTimeout(resolve, 5000));
    console.log("hola soy una promesa");
}

const promesa= palabra()

console.log(promesa);

// funcion generadoras de un indice par

function* generadorNumerosPares() {
  let numero = 0;
  while (true) {
    yield numero;
    numero += 2;
  }
}

let numeros = generadorNumerosPares()
console.log(numeros.next().value);
console.log(numeros.next().value);
console.log(numeros.next().value);
console.log(numeros.next().value);
console.log(numeros.next().value);
console.log(numeros.next().value);












