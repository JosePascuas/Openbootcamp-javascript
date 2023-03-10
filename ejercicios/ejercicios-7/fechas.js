let hoy= new Date();
console.log(hoy);

let nacimientoLeyenda= new Date(1999, 0, 29)
console.log(nacimientoLeyenda);

let comparacion= hoy>nacimientoLeyenda
console.log(comparacion);

let nacimiento= nacimientoLeyenda.getDate();
let mesNacimiento= nacimientoLeyenda.getMonth();
let anioNacimiento= nacimientoLeyenda.getFullYear();
console.log(mesNacimiento);
console.log(anioNacimiento);
console.log(nacimiento);
