// Suma de números primers

const nombrePrimer = 14;

function esPrimer(nombre) {
  console.log(`És ${nombre} un nombre Primer?`);
  if (nombre <= 1) {
    return false;
  }
  for (let i = 2; i <= nombre / 2; i++) {
    if (nombre % i === 0) {
      console.log('Divisible per ' + i);
      return false;
    }
  }
  return true;
}

esPrimer(nombrePrimer)
  ? console.log('És primer!')
  : console.log('NO és primer!');
