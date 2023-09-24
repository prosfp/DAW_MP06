function sumar() {
  // Obtén els valors dels inputs
  var num1 = parseFloat(document.getElementById('num1').value);
  var num2 = parseFloat(document.getElementById('num2').value);

  // Realitza la suma
  var resultat = num1 + num2;

  // Mostra el resultat
  document.getElementById('resultat').textContent = resultat;
}
isard@ubuntu:~/Escriptori/DAW/Wiki/DAW_MP06$ git push origin gh-pages
error: l'especificació de referència font gh-pages no coincideix amb cap referència