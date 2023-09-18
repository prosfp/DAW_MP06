/* // Kelvin constant 
const kelvin = 0;
// Converting to Celsius
const celsius = kelvin - 273;
// Converting to Fahrenheit rounding down the value
const fahrenheit = Math.floor((celsius * (9/5)+32))

console.log("La temperatura és entorn els "+fahrenheit+" degrees Fahrenheit") */

// Demana a l'usuari que introdueixi la temperatura en Fahrenheit
let input = prompt('Introdueix la temperatura en graus Fahrenheit:');

// Converteix l'entrada de text a un número (si és possible)
let fahrenheit = parseFloat(input);

// Comprova si l'entrada és vàlida
if (!isNaN(fahrenheit)) {
  // Fes la conversió a Celsius
  let celsius = Math.floor(((fahrenheit - 32) * 5) / 9);

  // Mostra el resultat utilitzant un alert
  alert(`La temperatura en graus Celsius és: ${celsius}°C`);
} else {
  // Mostra un missatge d'error si l'entrada no és vàlida
  alert(
    'Entrada no vàlida. Si us plau, introdueix una temperatura numèrica en graus Fahrenheit.'
  );
}
