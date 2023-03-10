const datosPersonales={
  nombre: "Jose Miguel",
  apellido: "Pascuas",
  edad: 24,
  altura: 176,
  isDeveloper: true
}

let obtenerEdad= datosPersonales.edad
console.log(obtenerEdad)



const nuevaLista= [
  {
    nombre: "Jose Miguel",
    apellido: "Pascuas",
    edad: 24,
    altura: 176,
    isDeveloper: true
  },
  {
    nombre: "Helmer",
    apellido: "Torres",
    edad: 27,
    altura: 186,
    isDeveloper: true
  },
  {
    nombre: "Cristian",
    apellido: "Viloria",
    edad: 25,
    altura: 182,
    isDeveloper: false
  }
]

nuevaLista.sort((a, b) => a.edad - b.edad)
console.log(nuevaLista)