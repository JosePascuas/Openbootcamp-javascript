const array= ["tomate", "cebolla", "lechuga", "papa", "huevos"]
const NewArray= array.push( "aceite de girasol")
console.log(array)

const Eliminar_producto= array.pop()
console.log(array)

let peliculasFavoritas = [
    {
    titulo: "El club de la pelea",
    director: "David Fincher",
    fecha: 1999
    },
    {
    titulo: "La vida es bella",
    director: "Roberto Benigni",
    fecha: 1997
    },
    {
    titulo: "Memento",
    director: "Christopher Nolan",
    fecha: 2000
    }
]; 

const peliculas_antesDE2010= peliculasFavoritas.filter(obj => obj.fecha>2010)
console.log(peliculas_antesDE2010)

const Directores= peliculasFavoritas.map(function(peliculasFavoritas)
{return peliculasFavoritas.director})
console.log(Directores)

const titulos= peliculasFavoritas.map(function(peliculasFavoritas) 
{return peliculasFavoritas.titulo})
console.log(titulos)

let peliculasConcatenadas = [];
peliculasFavoritas.forEach(peliculasFavoritas => {
  let tituloDirector = peliculasFavoritas.titulo.concat(" - ", peliculasFavoritas.director);
  peliculasConcatenadas.push(tituloDirector);
});
console.log(peliculasConcatenadas)

const arreglo= peliculasFavoritas.map(peliculasFavoritas => `${peliculasFavoritas.director} - ${peliculasFavoritas.titulo}`)
console.log(arreglo);

const directores = ["Christopher Nolan", "Steven Spielberg", "Quentin Tarantino"];
const tituloIngles = ["The Dark Knight", "Jurassic Park", "Pulp Fiction"];

const listaConcatenada = [...directores, ...tituloIngles];
console.log(listaConcatenada)
