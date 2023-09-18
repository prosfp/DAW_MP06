# Comentaris, tipus de dades, constants i variables

## Manipulació de Dades en JavaScript

En JavaScript, podem manipular dades de diverses maneres. En aquesta secció, explorarem com imprimir dades, escriure comentaris i els set tipus fonamentals de dades en JavaScript.

### Imprimir Dades a la Consola

Per imprimir dades a la consola en JavaScript, utilitzem la funció `console.log()`. Aquesta funció és útil per depurar i mostrar missatges. Aquí tens un exemple:

```javascript
console.log('Aquest és un missatge de prova.');
```

Aquest codi imprimirà el missatge "Aquest és un missatge de prova." a la consola.

### Comentaris en JavaScript

Els comentaris són útils per documentar el teu codi i fer-lo més llegible. JavaScript permet dos tipus de comentaris:

- Comentaris d'una sola línia amb `//`:

```javascript
// Aquest és un comentari d'una sola línia
```

- Comentaris de múltiples línies entre `/*` i `*/`:

```javascript
/*
Aquest és un comentari
de múltiples línies
*/
```

## Tipus de Dades

### Estructures i tipus de dades

L'últim estàndard ECMAScript defineix 9 tipus:

#### PRIMITIVES

6 tipus de dades primitives (els tipus de dades més bàsics i senzills en un llenguatge), controlades per l'operador `typeof`:

- **Boolean**: Poden ser `true` o `false`
- **Number**: valors decimals i enters (sempre es guarden com a decimals)

!!! note ""

    - Els números s'escriuen tal qual, separant els decimals amb un punt: `12` o `5.847`.

    - Els números es poden expressar en format científic i hexadecimal: `-5.2e6` o `0x3F`.
    - Els números tenen un màxim de 15 dígits significatius.
    - `NaN`: Not a Number, és el resultat d'intentar convertir a número alguna cosa que no ho és.
    - `Infinity` i `-Infinity`: representen els valors positius i negatius de l'infinit, respectivament, i s'obtenen com a resultat de certes operacions matemàtiques.

- **String**: cadenes de caràcters. S'han d'escriure entre cometes simples o dobles. No existeix el tipus Character: un caràcter es guarda igualment com si fos un String
- **BigInt**: un tipus de dada que es va introduir amb l'estàndard ECMAScript 11 (ES11) per a permetre la representació i manipulació de nombres sencers més grans que els que pot representar el tipus de dada Number estàndard
- **Symbol**: s'utilitza per crear valors únics i immutables. Cada valor Symbol és únic i no es pot canviar una vegada creat. Això el fa útil en situacions on es volen evitar col·lisions d'identificadors o es volen utilitzar noms únics per a propietats d'objectes.
- **Undefined** i **Null**

!!! info "**Undefined** i **Null**"

    **Undefined**: Al mostrar una variable que està declarada però no se li ha assignat cap valor, mostra undefined.La variable no existeix (no ocupa espai en memòria).
    **Null**: Si es vol definir una variable però no se li vol assignar cap valor, es pot posar a null. La variable existeix (ocupa espai) però no conté cap valor (està buida).

#### COMPOSTOS

**Object**: són estructures de dades que poden contenir múltiples valors i funcions. Estan formats per un conjunt de parells clau-valor, on el clau és una cadena de text (anomenada "proprietat") i el valor pot ser qualsevol tipus de dada, inclòs un altre objecte. També s'utilitza per estructures de dades com: new Object, new Array, new Map, new Set, new WeakMap, new WeakSet, new Date i gairebé tot fet amb la paraula clau new.

**Function**: són blocs reutilitzables de codi que poden acceptar arguments i realitzar tasques específiques. Les funcions poden ser assignades a variables, passades com a arguments a altres funcions i fins i tot retornades com valors de d'altres funcions. Les funcions també tenen propietats i mètodes especials, com ara length (que indica el nombre d'arguments esperats) i call (que permet cridar una funció amb un objecte específic com a context).

## Constants i Variables

Les variables en JavaScript són utilitzades per emmagatzemar dades i es poden identificar amb un nom que segueixi els següents criteris. Alguns exemples de la sintaxi a utilitzar per declarar variables:

```Javascript
- nomVariable
- \_variableSecundaria
- $variableTerciaria
```

- Poden contenir lletres, dígits o el guió baix (\_).

- No es poden utilitzar paraules reservades de JavaScript.

!!! warning inline end

    JavaScript és  ==Case Sensitive==, el que significa que distingeix entre majúscules i minúscules. Això vol dir que les variables com "nom", "Nom" i "NOM" són considerades com variables diferents.

#### Recomanacions d'estil

- Utilitza noms significatius.
- Utilitza **camelCase** per als noms de variables.
- Evita noms massa llargs o complexos.
- Utilitza noms en anglès (pot ser interpretat per un major nombre de persones)
- Evita abreviacions confuses.
- Evita paraules reservades de JavaScript.

### Declaració i inicialització: `var`, `let` i `const`

En JavaScript, les variables són utilitzades per emmagatzemar dades. Hi ha diferents maneres de declarar variables, com `var`, `let`, i `const`, i cadascuna té les seves particularitats. En aquesta pàgina, explorarem com declarar variables i les diferències clau entre `var`, `let`, i `const`.

**VAR** Declaració de Variables Tradicional

- La declaració var és la més antiga i amplament utilitzada abans de l'aparició d'let i const.
- Les variables declarades amb var tenen ==visibilitat local i global== (veure més endavant), la qual cosa significa que només tenen visibilitat dins de la funció en què es declaren.
- Es pot redeclarar la mateixa variable var sense cap advertència.
- Les variables var apliquen "hoisting", la qual cosa significa que es poden utilitzar abans de la seva declaració.

```javascript
function exempleVar() {
  var x = 10;
  if (true) {
    var x = 20; // Aquesta x substitueix la primera x
  }
  console.log(x); // Imprimeix 20
}
```

**LET** Declaració de Variables Bloc

- La declaració let es va introduir a ES6 (ECMAScript 2015) i és preferible a var.
- Les variables declarades amb let tenen ==visibilitat de bloc==, la qual cosa significa que només tenen visibilitat dins del bloc (com ara una funció o un bucle) en què es declaren.
- No es pot redeclarar la mateixa variable let dins del mateix bloc.
- Les variables let apliquen hoisting tot i que només estan disponibles després de la seva declaració.
- **El seu ús és recomanat en detriment de `var`**

```javascript
function exempleLet() {
  let y = 30;
  if (true) {
    let y = 40; // Aquesta y és diferent de la primera y
  }
  console.log(y); // Imprimeix 30
}
```

**CONST** Declaració de Constants

- La declaració const també es va introduir a ES6 i s'utilitza per declarar variables amb valors constants que no canviaran.
  Les variables declarades amb const tenen també ==visibilitat de bloc== com let.
- No es pot reassignar un nou valor a una variable const després de la seva inicialització. No obstant això, si és un objecte o un array, els seus continguts es poden modificar.
- Les variables const també apliquen hoisting i només estan disponibles després de la seva declaració.

```javascript
function exempleConst() {
  const z = 50;
  if (true)
    // No es pot fer això: z = 60; (dóna error)
    z = 60;
  }
  console.log(z); // Imprimeix 50
}
```

!!! warning inline end "HOISTING"

    Les variables declarades amb __let__ o __const__ són HOISTED SENSE una inicialització per defecte. Així que, accedir-hi abans de la línia on s'han declarat falta saltar un un RerenceError: No es pot accedir a 'variable' abans de la inicialització.
    En canvi, les variables declarades amb __var__ són HOISTED AMB una inicialització `undefined` per defecte. Per tant quan accedim a elles abans de ser declarades, ens torna un `undefined`

En resum, utilitza `let` quan vulguis variables amb àmbit de bloc i que poden ser reassignades, i utilitza `const` quan vulguis declarar constants. Evita utilitzar `var` ja que pot portar a problemes d'àmbit.

### Conversió de variables

- En JavaScript, les variables poden ser de diferents tipus, com números, cadenes de text, booleans, etc.

- Les variables es poden convertir d'un tipus a un altre mitjançant les següents tècniques:

  - **Coerció implícita**: JavaScript pot fer conversions automàtiques en certes situacions. Per exemple, en una operació entre un número i una cadena de text, JavaScript converteix la cadena de text a número si és possible.
    ```javascript
    let num = 42; // Una variable numérica
    let str = '10'; // Una cadena de text que representa un número
    let resultat = num + str; // JavaScript converteix "str" a número per a la suma
    console.log(resultat); // Imprimeix 52, ja que la suma és numèrica
    ```

- **Coerció explícita**: Pots forçar una conversió de tipus mitjançant les funcions `Number()`, `String()`, i `Boolean()`.

### Equivalents Truthy/Falsy

- En JavaScript, les expressions es poden avaluar com a `true` o `false` en contextos lògics, i aquesta avaluació es basa en el concepte de **equivalents truthy/falsy**.

- Valors que es consideren **truthy** (és a dir, es comporten com a `true` en un context lògic):

  - Tots els valors excepte els que es consideren **falsy**.
  - Exemples de valors truthy: números no nuls, cadenes de text no buides, objectes, arrays, i més.

- Valors que es consideren **falsy** (és a dir, es comporten com a `false` en un context lògic):

  - Valors buits com `undefined`, `null`, `0`, `NaN`, `""` (una cadena de text buida), i `false`.
  - Exemples de valors falsy: `undefined`, `null`, `0`, `""`, `false`.

- Pots aprofitar aquesta conversió per simplificar el codi en certs casos.

Per a més detalls i exemples, pots consultar [aquest recurs](https://www.w3schools.com/jsref/jsref_type_conversion.asp).

Aquest resum abasta la conversió de variables i els equivalents truthy/falsy en JavaScript i està en format Markdown. Si necessites més informació o exemples específics, no dubtis a preguntar!

### Tipat dinàmic

JavaScript és un llenguatge feblement tipat i dinàmic. Les variables a JavaScript no estan associades directament a cap tipus de valor en particular, i a qualsevol variable se li pot assignar (i reassignar) valors de tots els tipus:

```javascript
let foo = 42; // foo ara és un número
foo = 'bar'; // foo ara és una cadena de text
foo = true; // foo ara és un booleà
```

### Recursos externs

- [Codecademy - Tipus de Dades en JavaScript](https://www.codecademy.com/resources/docs/javascript/data-types?page_ref=catalog)
- [MDN Web Docs - Estructures de Dades JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
