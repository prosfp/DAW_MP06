function sumar() {
  // Obtén els valors dels inputs
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);

  // Realitza la suma
  var resultat = num1 + num2;

  // Mostra el resultat
  document.getElementById("resultat").textContent = resultat;
}

// Create a function with regex that matches email address
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

console.log(validateEmail("pablo.ros@cirvianum.cat"));
console.log(validateEmail("pablo"));
console.log(validateEmail("pablo@cirvianum"));
