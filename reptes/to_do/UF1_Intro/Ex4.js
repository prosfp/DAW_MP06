// CÀLCUL DEL FACTORIAL

function calcularFactorialConBucle(n) {
  let factorial = 1;

  // Utilizamos un bucle for para multiplicar los números de 1 a n.
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }

  return factorial;
}

// Ejemplo de uso:
const numero = 5;
const factorial = calcularFactorialConBucle(numero);
console.log(`El factorial de ${numero} es ${factorial}`);

////////////////////////////////////////////////////////////////////

function calcularFactorial(n) {
  // Caso base: Si n es igual a 0, el factorial es 1.
  if (n === 0) {
    return 1;
  }
  // Caso recursivo: Multiplicamos n por el factorial de n-1.
  return n * calcularFactorial(n - 1);
}
