# Scope - Àmbit de Variable

JavaScript és un llenguatge fortament orientat a funcions. Ens dóna molta llibertat. Una funció es pot crear en qualsevol moment, passar com a argument a una altra funció i després cridar-la des d'un lloc del codi totalment diferent més endavant.

Sabem que una funció pot accedir a variables fora d'ella. Però, ==què passa si aquestes variables "externes" canvien des que es crea una funció? La funció veurà els valors nous o els antics?==

I si una funció es passa com a paràmetre i es crida des d'un altre lloc del codi, tindrà accés a les variables externes en el nou lloc?

## Blocs de codi (Block Scope)

Si una variable es declara dins d'un bloc de codi `{...}``, només és visible dins d'aquest bloc.

Per exemple:

```javascript
{
  // fer una feina amb variables locals que no haurien de veure's fora
  let missatge = 'Hola'; // només visible en aquest bloc
  alert(missatge); // Hola
}

alert(missatge); // Error: el missatge no s'ha definit (undefined)
```

Això ho podem utilitzar per aïllar un fragment de codi que realitza la seva pròpia tasca, amb variables pròpies:

```javascript
{
  // veure missatge
  let missatge = 'Hola';
  alert(missatge);
}

{
  // veure un altre missatge
  let missatge = 'Adéu';
  alert(missatge);
}
```

Sense blocs, hi hauria un error:

```javascript
// veure missatge
let missatge = 'Hola';
alert(missatge);

// veure un altre missatge
let missatge = 'Adéu'; // Error: la variable ja ha estat declarada
alert(missatge);
```

Per a `if`, `for`, `while` i altres, les variables declarades dins de `{...}`` també només són visibles a l'interior:

```javascript
if (true) {
  let frase = '¡Hola!';

  alert(frase); // ¡Hola!
}

alert(frase); // Error, no existeix aquesta variable!
```

Aquí, després que acabi `if`, l'alerta següent no veurà la `frase`, d'aquí l'error.

Això és genial, ja que ens permet crear variables locals de bloc, específiques d'una branca `if`.

La mateixa lògica es segueix per als bucles `for` i `while`:

```javascript
for (let i = 0; i < 3; i++) {
  // la variable "i" només és visible dins d'aquest for
  alert(i); // 0, després 1, després 2
}

alert(i); // Error, aquesta variable no existeix!
```

Visualment, `let i` està fora de {...}; però la construcció `for` és especial aquí: la variable declarada dins d'ella es considera part del bloc.

## Àmbit de funcions - Funcions Niades (Nested Functions)

Una funció es diu "niada" (de "niu"), o "nested" en anglès, quan es crea dins d'una altra funció.

És fàcil fer-ho amb JavaScript. Ho podem fer servir per organitzar el nostre codi:

```javascript
function dirHolaAdéu(nom, cognom) {
  // funció anidada auxiliar per a usar a continuació
  function obtenirNomComplet() {
    return nom + ' ' + cognom;
  }

  alert('Hola, ' + obtenirNomComplet());
  alert('Adéu, ' + obtenirNomComplet());
}
```

Aquí, la funció `obtenirNomComplet()` pot accedir a les variables externes i, per tant, pot retornar el nom complet. Les funcions niades són bastant comunes en JavaScript.

El que és molt més interessant és que podem retornar una funció niada: ja sigui com a propietat d'un objecte nou o com a resultat en si mateixa. Llavors es pot fer servir en un altre lloc. No importa on, encara té accés a les mateixes variables externes.

A continuació, `makeCounter` crea la funció "comptador" que retorna el següent número en cada invocació:

```javascript
function makeCounter() {
  let comptador = 0;

  return function () {
    return comptador++;
  };
}

let comptador = makeCounter();

alert(comptador()); // 0
alert(comptador()); // 1
alert(comptador()); // 2
```

Malgrat ser un codi simple, variants lleugerament modificades d'aquest codi tenen usos pràctics, com ara un generador de nombres aleatoris per a proves automatitzades.

Com funciona això? Si creem múltiples comptadors, seran independents? Què està passant amb les variables aquí? Entengue-m'ho:

### Àmbit o "Scope" lèxic

**Pas 1: Variables**

A JavaScript, cada funció en execució, el bloc de codi `{...}`, i l'script en el seu conjunt tenen un objecte intern (ocult) associat anomenat "Àmbit Lèxic" o "Àmbit Lexical".

==Una “variable” és només una propietat de l'objecte intern, el "Registre d'entorn". Obtenir o canviar una variable significa obtenir o canviar una propietat d'aquest objecte.==

```javascript
// Exemple de variable d'àmbit lèxic global
let missatge = 'Hola'; // Variable global

function saludar() {
  // Exemple de variable d'àmbit lèxic local
  let nom = 'Andreu'; // Variable local a la funció
  console.log(missatge); // Accedim a la variable global
  console.log(nom); // Accedim a la variable local
}

saludar();
console.log(missatge); // Podem accedir a la variable global fora de la funció
console.log(nom); // Això genera un error, ja que 'nom' només és visible dins de la funció
```

**Pas 2: Declaració de Funcions**

Una funció també és un valor, com una variable. ==La diferència és que una **declaració de funció** s'inicialitz completament en el moment de la creació. Per això podem cridar-les abans de la seva declaració a diferència de `let`que no es pot usar fins la seva declaració (hoisting).==

```javascript
saludar();

function saludar() {
  console.log('Hola, Joan!');
}
```

**Pas 3: Àmbit Lèxic Intern i Extern**

Quan s'executa una funció, al començament de la trucada, es crea automàticament un nou àmbit lèxic per emmagatzemar variables i paràmetres locals.

```javascript
function saludar(nom) {
  let missatge = 'Hola'; // Variable local a la funció
  console.log(missatge + ' ' + nom);
}

saludar('Maria'); // "Hola Maria"
saludar('Pere'); // "Hola Pere"
```

L'àmbit lèxic intern té una referència a l'àmbit lèxic extern.

==Quan el codi vol accedir a una variable: primer la busca a l'àmbit lèxic intern, després l'extern, després el més extern, i així successivament fins arribar a l'àmbit global.==

```javascript
function exterior() {
  let variableExterior = 'Fora';

  function interior() {
    let variableInterior = 'Dins';
    console.log(variableExterior); // Accedim a la variable de l'àmbit exterior
    console.log(variableInterior);
  }

  interior();
}

exterior();
```

**Pas 4: Retornar una Funció**

Les funcions recorden l'àmbit lèxic en què van ser creades. Això permet que les funcions mantinguin referència als valors de les seves variables parentals encara que es cridin en altres llocs.

==Una variable s'actualitza a l'entorn lèxic en què es troba, no en l'entorn lèxic en què es va crear.==

```javascript
function crearComptador() {
  let contador = 0;

  return function () {
    contador++;
    return contador;
  };
}

let comptadorA = crearComptador();
console.log(comptadorA()); // 1
console.log(comptadorA()); // 2

let comptadorB = crearComptador();
console.log(comptadorB()); // 1 (un altre comptador independent)
```

!!! Tip "Concepte Closure"

    Existeix un terme general en programació conegut com a **closure** (clausures) que els desenvolupadors solen conèixer.

    Una clausura és una funció que recorda les seves variables externes i pot accedir-hi. En alguns llenguatges, això no és possible o una funció ha d'escriure's d'una manera especial perquè això passi. No obstant això, com acabem d'explicar, a JavaScript totes les funcions són clausures naturals (només hi ha una excepció, que es cobrirà en la sintaxi "new Function").

    En altres paraules, recorden automàticament on es van crear utilitzant una propietat oculta [[Environment]], i després el seu codi pot accedir a les variables externes.

    Les clausures són útils per a moltes altres coses també, com gestionar estat en funcions d'ajust, crear **constructors d'objectes amb mètodes privats**, i molt més.

Teniu una molt bona explicació en aquest vídeo:

<iframe width="560" height="315" src="https://www.youtube.com/embed/Whtg9XTn_7Y?si=4iNp66DfkLyjYuwe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

També de manera detallada al segÜent article [Ámbito o Alcance léxico (Closures)](https://es.javascript.info/closure#ambito-o-alcance-lexico).
