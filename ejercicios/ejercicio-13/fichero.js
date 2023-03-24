function fib(num){
  let secuencia=[]
  for (let i = 0; i < num; i++) {
    if (i===0 || i===1){
      secuencia.push(1)
    } else {
      secuencia.push(secuencia[i-1] + secuencia[i-2])
    }
  }
  return secuencia
}

console.log(fib(8));