class estudiante {
  constructor(nombre){
    this.nombre = nombre
    this.asignaturas = ["javascript", "Html", "Css"]
  }

  obtenDatos(){
    return {
    nombre: this.nombre,
    asignaturas: this.asignaturas
    }
  }
}

const estudiante2= new estudiante("Jose")
console.log(estudiante2.obtenDatos())