const primos = obtenerNumerosPrimos(1, 10);
console.log(primos);

function obtenerNumerosPrimos(numeroInicial, numeroFinal) {
  const numerosPrimos = [];
  if (numeroInicial > numeroFinal) {
    throw Error("El número inicial debe ser menor que el número final");
  }
  for (let actual = numeroInicial; actual <= numeroFinal; actual++) {
    if (esPrimo(actual)) {
      numerosPrimos.push(actual);
    }
  }
  return numerosPrimos;
}

function esPrimo(numero) {
  if (numero <= 2) return false;
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}