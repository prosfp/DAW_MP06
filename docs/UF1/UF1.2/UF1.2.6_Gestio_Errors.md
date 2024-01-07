# Gestió d'Errors

#### ReferenceError

- Un ReferenceError és un tipus d'error que es produeix quan es fa servir una variable que no existeix.
- Per prevenir aquest error, totes les variables han de ser declarades prèviament.

```javascript
// Exemple de ReferenceError a JavaScript
let firstName = 'John';

// Aquí obtenim un ReferenceError perquè lastName no ha estat declarada
console.log(firstName + lastName);
```

#### SyntaxError

- Un SyntaxError és un tipus d'error que es produeix quan hi ha errors de sintaxi en el codi, creant codi invàlid que no pot ser interpretat pel compilador.
- Algunes causes comunes d'un SyntaxError són: falta de parèntesis, claudàtors o cometes, falta de punts i coma o errors d'ortografia en noms de variables o funcions.

```javascript
// Exemple de SyntaxError a JavaScript
// Falta dos punts després del parèntesi de tancament
function suma(a, b)
  return a + b;
```

#### TypeError

- Un TypeError és un tipus d'error que es produeix quan s'intenta realitzar una operació en un valor del tipus incorrecte.
- Un exemple de TypeError és utilitzar un mètode de cadena en un valor numèric.

```javascript
// Exemple de TypeError a JavaScript
let nombre = 1;
let cadena = 'un';

// Aquí intentem concatenar el nombre i la cadena, la qual cosa provocarà un TypeError
console.log(nombre + cadena);
```

#### Error en temps d'execució a JavaScript

- Un error en temps d'execució a JavaScript és un error que es produeix mentre s'està executant el codi.
- Alguns errors en temps d'execució són objectes integrats a JavaScript amb una propietat de nom i missatge. Qualsevol codi després d'un error en temps d'execució no es processarà.

#### La paraula clau "throw" a JavaScript

- La paraula clau "throw" es col·loca abans d'una crida a la funció Error() o d'un objecte per construir i llançar un error.
- Un cop s'ha llançat un error, el programa s'atura i qualsevol codi següent no s'executarà.

```javascript
// El programa llançarà i mostrarà aquest objecte Error amb el missatge 'Alguna cosa ha anat malament'
throw Error('Alguna cosa ha anat malament');

// El programa s'aturarà després de llançar un error i no es mostrarà el següent codi.
console.log('Això no es mostrarà');
```

#### La funció "Error" a JavaScript

- La funció "Error" a JavaScript crea un objecte d'error amb un missatge personalitzat. Aquesta funció rep un argument de cadena que esdevé el valor de la propietat de missatge de l'error.
- Un error creat amb aquesta funció no atura l'execució del programa a menys que s'utilitzi la paraula clau "throw" per llançar l'error.

```javascript
console.log(Error('La teva contrasenya és massa feble.')); // Error: La teva contrasenya és massa feble.
```

#### La sentència "try...catch" a JavaScript

- Una sentència "try...catch" a JavaScript permet anticipar i gestionar els errors llançats (ja siguin errors integrats o construïts amb Error()) mentre permet que el programa continuï executant-se.
- El codi que pot generar un error es col·loca dins del bloc "try", i les accions per gestionar aquests errors es col·loquen dins del bloc "catch".

```javascript
// Una sentència try...catch que llença un Error construït
try {
  throw Error('Aquest error construït serà capturat');
} catch (e) {
  console.log(e); // Mostra l'objecte Error llançat
}

// Una sentència try...catch que llança un error integrat
let cadenaFixa = 'No es pot reassignar';
try {
  cadenaFixa = 'Una nova cadena'; // Es llançarà un TypeError
} catch (e) {
  console.log('Ha ocorregut un error!'); // Mostra 'Ha ocorregut un error!'
}

console.log('Es mostra després de l'error'); // El programa continua executant-se
```

#### Documentació de JavaScript

- Moltes vegades, podem seguir la pista als errors, però encara estar confosos sobre com resoldre'ls. En aquestes situacions, podem consultar la documentació. Per a JavaScript, la documentació web de JavaScript de MDN és una eina poderosa. Si encara estem confosos després de mirar-ho, podem anar a StackOverflow, un fòrum de preguntes i respostes on els programadors publiquen problemes i altres programadors discuteixen i voten solucions.
