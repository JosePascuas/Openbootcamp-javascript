const Mensaje = saludo=> {
  if (typeof saludo === "string"){
    return "Hola bienvenido"
  } 
  throw new Error("hola el valor que acabas de ingresar no es de tipo string, corrigelo mi pez")

}

const PrimerMensaje= 8

try {
  const ok= Mensaje(PrimerMensaje)
  console.log(ok + " se esta ejecuentando de manera correcta")

}catch (e){
  console.error(`${e}`)
}

