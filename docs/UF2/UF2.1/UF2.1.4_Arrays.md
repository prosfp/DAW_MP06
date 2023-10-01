#Array

## Declaració i ús d'arrays

Les arrays són estructures de dades que permeten emmagatzemar múltiples valors en una sola variable. Això fa que siguin fonamentals en la programació ja que permeten gestionar conjunts de dades.

### Declaració d'arrays amb new

Pots crear una array buida amb la següent sintaxi:

```javascript
const arrayBuida = new Array();
```

### Declaració d'arrays amb [ ]

L'ús més comú és crear una array amb brackets ([]):

```javascript
const colors = ['roig', 'blau', 'verd'];
```

### Iteració d'arrays

Per recórrer els elements d'una array, pots utilitzar diverses opcions:

#### for

Un bucle `for` bàsic:

```javascript
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
```

#### for..in

Bucle `for..in` per recórrer les propietats d'un objecte (no recomanat per arrays):

```javascript
for (let index in colors) {
  console.log(colors[index]);
}
```

#### for..of

Bucle `for..of` introduït en ECMAScript 6 per recórrer valors directament:

```javascript
for (let color of colors) {
  console.log(color);
}
```

## Propietats i mètodes

Les arrays tenen diverses propietats i mètodes incorporats per gestionar-les.

### length

La propietat `length` retorna la longitud d'una array:

```javascript
console.log(colors.length); // Mostra 3
```

### concat()

El mètode `concat()` combina dues o més arrays en una nova:

```javascript
const fruits = ['poma', 'plàtan'];
const allItems = colors.concat(fruits);
console.log(allItems); // ["roig", "blau", "verd", "poma", "plàtan"]
```

### slice()

El mètode `slice()` crea una nova array prenent una part de l'original:

```javascript
const someColors = colors.slice(1, 3);
console.log(someColors); // ["blau", "verd"]
```

### indexOf()

El mètode `indexOf()` busca un element i retorna la seva primera posició:

```javascript
const index = colors.indexOf('blau');
console.log(index); // 1
```

### lastIndexOf()

Similar a `indexOf()`, però busca des de la dreta cap a l'esquerra:

```javascript
const lastIndex = colors.lastIndexOf('blau');
console.log(lastIndex); // 1
```

### includes()

El mètode `includes()` verifica si un element existeix a l'array:

```javascript
const hasGreen = colors.includes('verd');
console.log(hasGreen); // true
```

### reduce()

El mètode `reduce()` aplica una funció a una acumulació d'elements:

```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(sum); // 15
```

### map()

El mètode `map()` crea una nova array amb els resultats d'aplicar una funció a cada element:

```javascript
const doubled = numbers.map((number) => number * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
```

### filter()

El mètode `filter()` crea una nova array amb els elements que compleixen una condició:

```javascript
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers); // [2, 4]
```

### find()

El mètode `find()` retorna el primer element que compleix una condició:

```javascript
const firstEven = numbers.find((number) => number % 2 === 0);
console.log(firstEven); // 2
```

### push()

El mètode `push()` afegeix elements al final de l'array:

```javascript
colors.push('groc');
console.log(colors); // ["roig", "blau", "verd", "groc"]
```

### pop()

El mètode `pop()` elimina l'últim element de l'array i el retorna:

```javascript
const lastColor = colors.pop();
console.log(lastColor); // "groc"
```

### shift()

El mètode `shift()` elimina el primer element de l'array i el retorna:

```javascript
const firstColor = colors.shift();
console.log(firstColor); // "roig"
```

### unshift()

El mètode `unshift()` afegeix elements al principi de l'array:

```javascript
colors.unshift('taronja');
console.log(colors); // ["taronja", "blau", "verd"]
```

### join()

El mètode `join()` converteix una array en una cadena de text:

```javascript
const colorString = colors.join(', ');
console.log(colorString); // "taronja, blau, verd"
```

### toString()

El mètode `toString()` converteix una array en una cadena de text, igual que `join()` sense l'argument del separador:

```javascript
const colorString = colors.toString();
console.log(colorString); // "taronja, blau, verd"
```

### sort()

El mètode `sort()` ordena els elements de l'array alfabèticament (per defecte):

```javascript
colors.sort();
console.log(colors); // ["blau", "taronja", "verd"]
```

### reverse()

El mètode `reverse()` inverteix l'ordre dels elements a l'array:

```javascript
colors.reverse();
console.log(colors); // ["verd", "taronja", "blau"]
```

### splice()

El mètode `splice()` pot afegir, eliminar i reemplaçar elements en una array:

```javascript
const removed = colors.splice(1, 1, 'rosa');
console.log(removed); // ["taronja"]
console.log(colors); // ["verd", "rosa", "blau"]
```

## Arrays multidimensionals

Les arrays també poden contenir altres arrays, creant arrays multidimensionals. Això és útil per emmagatzemar dades en forma de taules o matrius.

### Declaració d'un array multidimensional

```javascript
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
```

### Extensió d'arrays amb prototipus

Pots afegir propietats i mètodes personalitzats a l'objecte `Array` mitjançant prototips.

#### Crear una propietat

```javascript
Array.prototype.total = function () {
  return this.reduce((accumulator, currentValue) => accumulator + currentValue);
};

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.total()); // 15
```

#### Crear un mètode

```javascript
Array.prototype.multiplyBy = function (factor) {
  return this.map((number) => number * factor);
};

const doubled = numbers.multiplyBy(2);
console.log(doubled); // [2, 4, 6, 8, 10]
```

## Referències

1. **MDN Web Docs**:

   - [Array - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
   - [Array.prototype - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype)

2. **W3Schools**:

   - [JavaScript Arrays - W3Schools](https://www.w3schools.com/js/js_arrays.asp)
   - [JavaScript Array Methods - W3Schools](https://www.w3schools.com/js/js_array_methods.asp)

3. **JavaScript.info**:

   - [Array Methods](https://javascript.info/array-methods)

4. **freeCodeCamp**:

   - [Introduction to the JavaScript Array filter() method](https://www.freecodecamp.org/news/an-introduction-to-the-javascript-array-filter-method-7a536a7456a4/)

5. **GeeksforGeeks**:

   - [JavaScript Array Methods](https://www.geeksforgeeks.org/javascript-array-methods/)

6. **YouTube Tutorials**:
   - "JavaScript Array Methods in 10 Minutes" - [Watch on YouTube](https://www.youtube.com/watch?v=R8rmfD9Y5-c)
   - "JavaScript Array Methods: map, forEach, filter, and more" - [Watch on YouTube](https://www.youtube.com/watch?v=H4CC5MFWI7w)

Aquestes fonts proporcionen tutorials, exemples i explicacions detallades que t'ajudaran a entendre i utilitzar les arrays i els seus mètodes de manera efectiva en JavaScript.
