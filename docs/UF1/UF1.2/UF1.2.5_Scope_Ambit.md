# Scope

L'àmbit es refereix a la visibilitat i l'accessibilitat de les variables en un programa. A JavaScript, hi ha dos tipus principals d'àmbits: l'àmbit global i l'àmbit local.

- **Àmbit Global:** Les variables declarades fora de qualsevol funció tenen un àmbit global. Aquestes variables són accessibles des de qualsevol part del codi, ja sigui dins de funcions, blocs de codi o al nivell superior de l'script.

  ```javascript
  var variableGlobal = 10;

  function exempleFuncio() {
    console.log(variableGlobal); // Accedim a la variable global
  }
  ```

- **Àmbit Local:** Les variables declarades dins d'una funció tenen un àmbit local. Aquestes variables només són accessibles dins de la funció on es declaren.

  ```javascript
  function exempleFuncio() {
    var variableLocal = 20;
    console.log(variableLocal); // Accedim a la variable local
  }
  ```

- L'àmbit local té prioritat sobre l'àmbit global. Si hi ha una variable amb el mateix nom en ambdós àmbits, la variable local s'utilitzarà dins de la funció.

## Clausura (Closures)

Una clausura (closure) és una funció que "recorda" el seu entorn lexical, fins i tot quan la funció s'executa fora d'aquest entorn. En altres paraules, una funció a JavaScript pot accedir a variables i paràmetres de la funció que la conté, fins i tot després que la funció externa hagi finalitzat la seva execució.

Un exemple pràctic de clausura (closure) pot ser crear funcions per a l'increment de valors.

Aquesta clausura mantindrà una variable interna que recorda l'estat anterior i pot incrementar-lo amb cada crida. Aquí tens un exemple:

```javascript
function crearIncrementador(increment) {
  var valor = 0; // Variable interna que actua com a memòria

  function incrementar() {
    valor += increment;
    console.log(valor);
  }

  return incrementar;
}

// Creem dues funcions d'increment amb diferents increments
var incrementarEn1 = crearIncrementador(1);
var incrementarEn5 = crearIncrementador(5);

// Fem algunes crides a les funcions
incrementarEn1(); // Mostra 1
incrementarEn1(); // Mostra 2
incrementarEn5(); // Mostra 5
incrementarEn5(); // Mostra 10
```

En aquest exemple, `crearIncrementador` és una funció que retorna una altra funció (`incrementar`). La funció interna `incrementar` té accés a la variable `valor` que està definida a l'àmbit de `crearIncrementador`.

Quan cridem les funcions retornades (`incrementarEn1` i `incrementarEn5`), encara tenen accés a la variable `valor` i poden incrementar-la amb l'increment que se'ls va passar inicialment.

Això és un exemple de com les clausures poden ser utilitzades per mantenir estat privat i crear funcions que recordin aquest estat entre crides.

Les clausures són útils per a moltes altres coses també, com gestionar estat en funcions d'ajust, crear **constructors d'objectes amb mètodes privats**, i molt més.
