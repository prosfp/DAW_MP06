# Arrays a JavaScript

A mesura que treballem en el nostre codi, sovint necessitem agrupar valors en una mateixa variable per representar conjunts de dades relacionades. Per fer-ho, podem utilitzar objectes o variables més senzilles anomenades arrays.

## Què és un array?

Un array és una col·lecció o agrupació d'elements en una única variable, cada un d'ells ubicat per la posició que ocupa a l'array. En algunes ocasions també ho trobareu referit en castella com "arreglos" o "vectors". A JavaScript, es poden definir de diverses formes:

### Constructor

Descripció

- `new Array(size)`: Crea un array buit de mida `size`. Els seus valors no estan definits, però estan disponibles.
- `new Array(e1, e2...)`: Crea un array amb els elements indicats.
- `[e1, e2...]`: Simplement, els elements dins de claudàtors. Aquesta és la notació preferida.

Per exemple, podríem tenir un array on la primera posició contingui 'a', la segona 'b' i la tercera 'c'. Això es crearia de la següent manera:

```javascript
// Forma tradicional (no sovint utilitzada en JavaScript)
const lletres = new Array('a', 'b', 'c'); // Array amb 3 elements
const lletres = new Array(3); // Array buit de mida 3

// Mitjançant literals (notació preferida)
const lletres = ['a', 'b', 'c']; // Array amb 3 elements
const lletres = []; // Array buit (0 elements)
const lletres = ['a', 5, true]; // Array mixt (String, Number, Boolean)
```

A diferència de molts altres llenguatges de programació, JavaScript permet que els arrays siguin de tipus mixt, **no és obligatori que tots els elements siguin del mateix tipus de dades**.

<!-- prettier-ignore -->
!!! note "Atenció!"
    En crear un array amb `new Array(size)`: si només s'indica un paràmetre numèric `size`, JavaScript crearà un array buit amb `size` elements. No és el mateix que `const a = [3]`, on creem un array amb un sol element, 3, que `new Array(size)` on es crea un array buit que encara no ha estat omplert amb res.

## Accés als elements de l'array

Per saber quantitat d'elements que té un array és molt senzill. Només cal accedir a la propietat `length`, que ens retornarà el nombre d'elements que hi ha a l'array:

- `.length`: Propietat que retorna el nombre d'elements de l'array.

També podem accedir o modificar un element específic de l'array utilitzant l'operador `[]`, de la mateixa manera que faríem amb strings per accedir a un caràcter concret:

```javascript
const lletres = ['a', 'b', 'c'];

lletres.length; // 3
lletres[0]; // 'a'
lletres[2]; // 'c'
lletres[5]; // undefined
```

Recorda que les posicions comencen a comptar des de 0 i que si intentem accedir a una posició que no existeix (més gran que la mida de l'array), ens tornarà `undefined`.

L'operador `[]` no només ens permet obtenir o accedir a un element de l'array, sinó que també ens permet modificar un element específic de l'array si fem una assignació:

```javascript
const lletres = ['a', 'b', 'c'];

lletres[1] = 'Z'; // Retorna "Z" i modifica lletres a ["a", "Z", "c"]
lletres[3] = 'D'; // Retorna "D" i modifica lletres a ["a", "Z", "c", "D"]
lletres[5] = 'A'; // Retorna "A" i modifica lletres a ["a", "Z", "c", "D", undefined, "A"]
```

Amb el nou mètode `.with()`, això es pot fer d'una manera més còmoda i sense modificar l'array original. Permet concatenar múltiples operacions, però recorda que només modifica, no es poden afegir elements que no existeixin prèviament a l'array:

```javascript
const lletres = ['a', 'b', 'c'];

lletres.with(1, 'Z'); // Retorna "Z" i modifica lletres a ["a", "Z", "c"]
lletres.with(1, 'Z').with(3, 'D'); // No es pot fer perquè la posició 3 no existeix
lletres.with(5, 'A'); // No es pot fer perquè la posició 5 no existeix
```

### El mètode `.at()`

A més de l'operador `[]`, també podem utilitzar el

mètode `.at()`, afegit a JavaScript. Amb aquest mètode, podem fer exactament el mateix que amb `[pos]`, però a més permet valors negatius, mitjançant els quals es poden obtenir elements en ordre invers, començant des de l'últim element:

```javascript
const lletres = ['a', 'b', 'c'];

lletres.at(0); // "a"
lletres.at(1); // "b"
lletres.at(3); // undefined
lletres.at(-1); // "c"
lletres.at(-2); // "b"
```

Aquesta característica fa que sigui bastant pràctic accedir a l'últim element (o prop de l'últim), ja que fer la mateixa operació amb l'operador `[]` era una mica menys directe i en alguns casos podia ser confús o poc intuïtiu:

```javascript
const lletres = ['a', 'b', 'c'];
const darrerElement = lletres.length - 1;

lletres[darrerElement]; // "c"
```

## Afegir o eliminar elements

Hi ha diverses maneres d'afegir elements a un array ja existent. Tingues en compte que ==en tots aquests casos estem modificant (variant) l'array original==. Veurem els mètodes que podem utilitzar per fer-ho:

### Mètode

- `.push(e1, e2, e3...)`: Afegeix un o diversos elements al final de l'array. Retorna la grandària de l'array.
- `.pop()`: Elimina l'últim element de l'array. Retorna l'element eliminat.
- `.unshift(e1, e2, e3...)`: Afegeix un o diversos elements a l'inici de l'array. Retorna la grandària de l'array.
- `.shift()`: Elimina el primer element de l'array. Retorna l'element eliminat.

**Tingues en compte que aquests mètodes serveixen per modificar (mutar) l'array original!!!**

Els arrays de JavaScript proporcionen mètodes tant per inserir com per eliminar elements al final de l'array i també a l'inici:

- Els mètodes `.push()` i `.pop()` intervenen al final de l'array.
- Els mètodes `.unshift()` i `.shift()` intervenen a l'inici de l'array.

Vegem com funcionen:

```javascript
const elements = [1, 2, 3]; // Array inicial

elements.push(4, 5, 6); // Retorna 6. Ara elements = [1, 2, 3, 4, 5, 6]
elements.push([7, 8, 9]); // Retorna 7. Ara elements = [1, 2, 3, 4, 5, 6, [7, 8, 9]]
```

El mateix exemple realitzat amb el mètode `.concat()`:

```javascript
const primeraPart = [1, 2, 3];
const segonaPart = [4, 5, 6];

primeraPart.concat(primeraPart); // Retorna [1, 2, 3, 1, 2, 3]
primeraPart.concat(segonaPart); // Retorna [1, 2, 3, 4, 5, 6]

// Es poden passar elements individuals
primeraPart.concat(4, 5, 6); // Retorna [1, 2, 3, 4, 5, 6]

// Es poden concatenar múltiples arrays i fins i tot barrejar-los amb elements individuals
primeraPart.concat(primeraPart, segonaPart, 7); // Retorna [1, 2, 3, 1, 2, 3, 4, 5, 6, 7]
```

Observa una detall molt important: El mètode `.concat()`, a diferència de `.push()`, no modifica l'array sobre el qual estem treballant i al qual li afegim els elements, sinó que simplement el retorna. A part d'això, en el cas de passar un array com a paràmetre, `.push()` l'insereix com un array, mentre que `.concat()` insereix cadascun dels seus elements.

## Separar i unir strings

També tenim un altre mètode amb el qual és possible crear un array a partir d'un string. Es tracta del mètode `.split()`. En aquest cas, el mètode `.join()` n'és la contrapartida. Amb `.join()` podem crear un string amb tots els elements de l'array, separant-los amb el text que li passem com a paràmetre:

```javascript
const lletres = ['a', 'b', 'c'];

// Uneix elements de l'array amb el separador indicat
lletres.join('->'); // Retorna 'a->b->c'
lletres.join('.'); // Retorna 'a.b.c'

// Separa elements del string amb el separador indicat
'a.b.c'.split('.'); // Retorna ['a', 'b', 'c']
'5-4-3-2-1'.split('-'); // Retorna ['5', '4', '3', '2', '1']
```

Com es pot veure en els exemples, `.join()` sempre retorna els elements com un string, mentre que `.split()` retorna un array.

Observa un cas especial, en el qual passem una cadena de text buida a `.split()`:

```javascript
'Hola a tots'.split(''); // Retorna ['H', 'o', 'l', 'a', ' ', 'a', ' ', 't', 'o', 'd', 'o', 's']
```

En aquest cas, hem demanat dividir el string sense indicar cap separador, per la qual cosa JavaScript pren la unitat mínima com a separador i ens retorna un array amb cada caràcter del string original. Tingues en compte que els espais en blanc també compten com a caràcter.

## CERCA d'Elements en un Array

En moltes ocasions, ens interessa cercar elements en un array per bé trobar-lo i treballar-hi, o per saber la seva posició en l'array. Per a això, existeixen una sèrie de mètodes que ens permeten dur a terme aquestes accions. A continuació, es mostren els següents mètodes:

### `.includes(element)`

Aquest mètode comprova si l'element està inclòs a l'array.

Exemple d'ús:

```javascript
const array = [1, 2, 3, 4, 5];
const element = 3;

if (array.includes(element)) {
  console.log(`L'element ${element} està a l'array.`);
} else {
  console.log(`L'element ${element} no està a l'array.`);
}
```

### `.includes(element, from)`

Aquest mètode fa la mateixa comprovació, però comença des de la posició `from` de l'array.

Exemple d'ús:

```javascript
const array = [1, 2, 3, 4, 5];
const element = 3;
const from = 2;

if (array.includes(element, from)) {
  console.log(
    `L'element ${element} està a l'array a partir de la posició ${from}.`
  );
} else {
  console.log(
    `L'element ${element} no està a l'array a partir de la posició ${from}.`
  );
}
```

### `.indexOf(element)`

Aquest mètode retorna la posició de la primera aparició de l'element a l'array. Si no existeix, retorna -1.

Exemple d'ús:

```javascript
const array = [1, 2, 3, 4, 5];
const element = 3;
const index = array.indexOf(element);

if (index !== -1) {
  console.log(`L'element ${element} està a la posició ${index} de l'array.`);
} else {
  console.log(`L'element ${element} no està a l'array.`);
}
```

### `.indexOf(element, from)`

Aquest mètode fa la mateixa tasca, però comença a buscar des de la posició `from` de l'array.

Exemple d'ús:

```javascript
const array = [1, 2, 3, 4, 3, 5];
const element = 3;
const from = 2;
const index = array.indexOf(element, from);

if (index !== -1) {
  console.log(
    `L'element ${element} està a la posició ${index} de l'array a partir de la posició ${from}.`
  );
} else {
  console.log(
    `L'element ${element} no està a l'array a partir de la posició ${from}.`
  );
}
```

### `.lastIndexOf(element)`

Aquest mètode retorna la posició de la última aparició de l'element a l'array. Si no existeix, retorna -1.

Exemple d'ús:

```javascript
const array = [1, 2, 3, 4, 3, 5];
const element = 3;
const lastIndex = array.lastIndexOf(element);

if (lastIndex !== -1) {
  console.log(
    `L'última aparició de l'element ${element} està a la posició ${lastIndex} de l'array.`
  );
} else {
  console.log(`L'element ${element} no està a l'array.`);
}
```

### `.lastIndexOf(element, from)`

Aquest mètode fa la mateixa comprovació, però comença a buscar des de la posició `from` de l'array.

Exemple d'ús:

```javascript
const array = [1, 2, 3, 4, 3, 5];
const element = 3;
const from = 2;
const lastIndex = array.lastIndexOf(element, from);

if (lastIndex !== -1) {
  console.log(
    `L'última aparició de l'element ${element} està a la posició ${lastIndex} de l'array a partir de la posició ${from}.`
  );
} else {
  console.log(
    `L'element ${element} no està a l'array a partir de la posició ${from}.`
  );
}
```

## CREACIÓ I MODIFICACIÓ de Subarrays

En algunes situacions, és necessari crear nous subarrays a partir d'un array original o realitzar modificacions a l'array original d'una manera més general, en lloc de fer-ho element per element. Per a aquestes tasques, hi ha diversos mètodes relacionats. A continuació, es descriuen aquests mètodes:

<!-- prettier-ignore -->
!!! Warning "A partir dara, els mètodes que es descriuen a continuació poden o no modificar l'array original."
    ✅ L'array original roman sense canvis.
    ⚠️ L'array original es modifica.

### `.slice(start, end)` ✅

Aquest mètode retorna els elements des de la posició `start` fins a `end` (excloent `end`). L'array original no es modifica.

Exemple d'ús:

```javascript
const arrayOriginal = [1, 2, 3, 4, 5];
const subarray = arrayOriginal.slice(1, 4); // Retorna [2, 3, 4]
```

### `.splice(start, size)` ⚠️

Aquest mètode retorna els propers `size` elements des de la posició `start`. També modifica l'array original.

Exemple d'ús:

```javascript
const arrayOriginal = [1, 2, 3, 4, 5];
const subarray = arrayOriginal.splice(1, 3); // Retorna [2, 3, 4] i modifica arrayOriginal a [1, 5]
```

### `.splice(start, size, e1, e2...)` ⚠️

Aquest mètode retorna els propers `size` elements des de la posició `start`. A més, insereix els elements `e1`, `e2`, etc., a la posició `start`. També modifica l'array original.

Exemple d'ús:

```javascript
const arrayOriginal = [1, 2, 3, 4, 5];
const subarray = arrayOriginal.splice(1, 3, 6, 7); // Retorna [2, 3, 4] i modifica arrayOriginal a [1, 6, 7, 5]
```

### `.toSpliced(start, size)` ✅

Aquest mètode és similar a `splice(start, size)`, però no modifica l'array original i retorna una còpia dels elements seleccionats.

Exemple d'ús:

```javascript
const arrayOriginal = [1, 2, 3, 4, 5];
const subarray = arrayOriginal.toSpliced(1, 3); // Retorna [2, 3, 4] sense modificar arrayOriginal
```

### `.toSpliced(start, size, e1, e2...)` ✅

Aquest mètode és similar a `splice(start, size, e1, e2...)`, però no modifica l'array original i retorna una còpia dels elements seleccionats.

Exemple d'ús:

```javascript
const arrayOriginal = [1, 2, 3, 4, 5];
const subarray = arrayOriginal.toSpliced(1, 3, 6, 7); // Retorna [2, 3, 4] sense modificar arrayOriginal
```

### `.copyWithin(pos, start, end)` ⚠️

Aquest mètode muta l'array, canviant els elements a la posició `pos` i copiant des de `start` fins a `end`.

Exemple d'ús:

```javascript
const arrayOriginal = [1, 2, 3, 4, 5];
arrayOriginal.copyWithin(0, 2, 4); // Modifica arrayOriginal a [3, 4, 3, 4, 5]
```

### `.fill(element, start, end)` ⚠️

Aquest mètode canvia els elements de l'array per l'element `element` des de la posició `start` fins a `end`.

Exemple d'ús:

```javascript
const arrayOriginal = [1, 2, 3, 4, 5];
arrayOriginal.fill(0, 1, 4); // Modifica arrayOriginal a [1, 0, 0, 0, 5]
```

### `.with(index, item)` ✅

Aquest mètode retorna una còpia de l'array original amb l'element a la posició `index` modificat. L'array original roman sense canvis.

Exemple d'ús:

```javascript
const arrayOriginal = [1, 2, 3, 4, 5];
const nouArray = arrayOriginal.with(2, 6); // Retorna [1, 2, 6, 4, 5] sense modificar arrayOriginal
```

## ORDENACIÓ d'Arrays

En JavaScript, és freqüent tenir una estructura de dades com un array i voler ordenar-ne el contingut segons un criteri específic. En aquesta secció, veurem alguns mètodes i formes per ordenar un array o realitzar modificacions per canviar-ne l'ordre:

### `.reverse()` ⚠️

Aquest mètode inverteix l'ordre dels elements de l'array. Modifica l'array original.

Exemple d'ús:

```javascript
const elements = ['A', 'B', 'C', 'D', 'E', 'F'];
elements.reverse(); // Modifica elements a ["F", "E", "D", "C", "B", "A"]
```

### `.toReversed()` ✅

Aquest mètode retorna una còpia de l'array amb l'ordre dels elements invertit. L'array original roman sense canvis.

Exemple d'ús:

```javascript
const elements = ['A', 'B', 'C', 'D', 'E', 'F'];
const reversedArray = elements.toReversed(); // Retorna ["F", "E", "D", "C", "B", "A"], sense modificar elements
```

### `.sort()` ⚠️

Aquest mètode ordena els elements de l'array segons un criteri de classificació alfabètica. Modifica l'array original.

Exemple d'ús:

```javascript
const elements = ['F', 'B', 'D', 'E', 'A', 'C'];
elements.sort(); // Modifica elements a ["A", "B", "C", "D", "E", "F"]
```

### `.sort(criteri)` ⚠️

Aquest mètode ordena els elements de l'array segons un criteri de classificació indicat pel paràmetre `criteri`. Modifica l'array original.

Exemple d'ús amb criteri personalitzat (orden inversa):

```javascript
const elements = [5, 3, 1, 4, 2];
elements.sort((a, b) => b - a); // Modifica elements a [5, 4, 3, 2, 1]
```

### `.toSorted()` ✅

Aquest mètode retorna una còpia de l'array amb els elements ordenats. L'array original roman sense canvis.

Exemple d'ús:

```javascript
const elements = ['F', 'B', 'D', 'E', 'A', 'C'];
const sortedArray = elements.toSorted(); // Retorna ["A", "B", "C", "D", "E", "F"], sense modificar elements
```

### `.toSorted(criteri)` ✅

Aquest mètode retorna una còpia de l'array amb els elements ordenats segons un criteri de classificació indicat pel paràmetre `criteri`. L'array original roman sense canvis.

Exemple d'ús amb criteri personalitzat (orden inversa):

```javascript
const elements = [5, 3, 1, 4, 2];
const sortedArray = elements.toSorted((a, b) => b - a); // Retorna [5, 4, 3, 2, 1], sense modificar elements
```

## FUNCIONS d'Array (Array functions)

### Què són les funcions d'array?

Bàsicament, són mètodes que té qualsevol variable que sigui de tipus **Array**, i que permeten realitzar una operació amb tots els elements d'aquest array (o una part d'ells) per aconseguir un objectiu concret, depenent del mètode. En general, a aquests mètodes se'ls passa per paràmetre una funció de retorn i uns paràmetres opcionals.

Aquestes són les funcions d'array que podem trobar a JavaScript:

### forEach(ƒ)

Executa la funció definida a ƒ per a cada un dels elements de l'array.

Exemple d'ús en JavaScript:

```javascript
const array = [1, 2, 3, 4];

array.forEach((element) => {
  console.log(element);
});
```

### every(ƒ)

Comprova si tots els elements de l'array compleixen la condició de ƒ.

Exemple d'ús en JavaScript:

```javascript
const array = [1, 2, 3, 4];

const result = array.every((element) => {
  return element > 0;
});

console.log(result); // Resultat: true
```

### some(ƒ)

Comprova si almenys un element de l'array compleix la condició de ƒ.

Exemple d'ús en JavaScript:

```javascript
const array = [1, 2, 3, 4];

const result = array.some((element) => {
  return element % 2 === 0;
});

console.log(result); // Resultat: true
```

### map(ƒ)

Construeix un array amb el que retorna ƒ per a cada element de l'array.

Exemple d'ús en JavaScript:

```javascript
const array = [1, 2, 3, 4];

const mappedArray = array.map((element) => {
  return element * 2;
});

console.log(mappedArray); // Resultat: [2, 4, 6, 8]
```

### filter(ƒ)

Filtra un array i es queda només amb els elements que compleixen la condició de ƒ.

Exemple d'ús en JavaScript:

```javascript
const array = [1, 2, 3, 4];

const filteredArray = array.filter((element) => {
  return element % 2 === 0;
});

console.log(filteredArray); // Resultat: [2, 4]
```

### flat(level)

Aplana l'array al nivell level indicat.

Exemple d'ús en JavaScript:

```javascript
const array = [1, [2, 3], [4, [5, 6]]];

const flattenedArray = array.flat(2);

console.log(flattenedArray); // Resultat: [1, 2, 3, 4, 5, 6]
```

### flatMap(ƒ)

Aplana cada element de l'array, transformant-lo segons ƒ. És equivalent a .map().flat(1).

Exemple d'ús en JavaScript:

```javascript
const array = [1, 2, 3];

const flatMappedArray = array.flatMap((element) => {
  return [element, element * 2];
});

console.log(flatMappedArray); // Resultat: [1, 2, 2, 4, 3, 6]
```

### findIndex(ƒ)

Retorna la posició de l'element que compleix la condició de ƒ.

Exemple d'ús en JavaScript:

```javascript
const array = [1, 2, 3, 4];

const index = array.findIndex((element) => {
  return element === 3;
});

console.log(index); // Resultat: 2
```

### find(ƒ)

Retorna l'element que compleix la condició de ƒ.

Exemple d'ús en JavaScript:

```javascript
const array = [1, 2, 3, 4];

const element = array.find((element) => {
  return element % 2 === 0;
});

console.log(element); // Resultat: 2
```

### findLastIndex(ƒ)

Igual que findIndex(), però comença a buscar des de l'últim element al primer.

### findLast(ƒ)

Igual que find(), però comença a buscar des de l'últim element al primer.

### reduce(ƒ, initial)

Executa ƒ amb cada element (d'esquerra a dreta), acumulant el resultat.

Exemple d'ús en JavaScript:

```javascript
const array = [1, 2, 3, 4];

const result = array.reduce((accumulator, element) => {
  return accumulator + element;
}, 0);

console.log(result); // Resultat: 10
```

### reduceRight(ƒ, initial)

Igual que l'anterior, però en ordre de dreta a esquerra.

##Referències

- [MDN - JavaScript Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [W3Schools - JavaScript Array](https://www.w3schools.com/js/js_arrays.asp)
- [LenguajeJS.com - Qué es un Array?](https://lenguajejs.com/javascript/arrays/que-es/)
