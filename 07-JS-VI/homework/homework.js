// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  //tambien: var resultado = nombre[0].toUpperCase() + nombre.slice(1) --> return resultado.
  nombre.charAt(0).toUpperCase(); //tomo indice 0 "m" y la paso a mayus "M"
  nombre.slice(1); //tomo el resto del string "ario"
  function capitalizar(str){ //creo la funcion que acepte string(str) y concatene la M mayus + el slice(resto del string)
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return capitalizar(nombre); //retorno el resultado de mi funcion, que capitaliza el primer indice y lo concatena, segun mi param dado(nombre)
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
    cb(); //solo la invoco, nada más.
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  cb(n1, n2);

}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  //var numeros = [1, 2, 3, 4];
  //var sum = 0;
  var suma = numeros.reduce(function(acumular, nroActual){
    return acumular + nroActual;
  })
  cb(suma);

}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  array.forEach(function(e, i){ //"e" y "i" representan el elemento y el indice del array, la "function" se va ejecutando por cada uno de los elementos del array
    cb(e, i);
  })
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  var numeros = []; //creo nuevo array (vacio)
  array.map(function(elemento){ //cada elemento del array (ya dado, no el nuevo) como parametro, la func debe pasar estos al cb
    numeros.push(cb(elemento));//aca pushee los elementos en mi nuevo array creado
  })
  return numeros;
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  var nuevoArr = array.filter(function(element){
    return element[0] === "a";
  })
  return nuevoArr;
  
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
