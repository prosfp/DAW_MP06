# Number

**L'Objecte `Number` a JavaScript**

L'objecte `Number` a JavaScript és un objecte incorporat que s'utilitza per treballar amb valors numèrics i realitzar operacions matemàtiques. Tot i que els números a JavaScript també es poden representar com a valors primitius (números), l'objecte `Number` proporciona mètodes i propietats addicionals per realitzar tasques específiques amb números.

**Creació d'un Objecte Number**

Podeu crear un objecte `Number` utilitzant el constructor `Number()` o simplement declarant un valor numèric:

```javascript
const num1 = new Number(42); // Crear un objecte Number
const num2 = 3.14; // Declarar un valor numèric (primitiu)
```

**Propietats de l'Objecte Number**

L'objecte `Number` té algunes propietats útils que podeu utilitzar:

- `Number.MAX_VALUE`: El valor numèric més gran representable a JavaScript.
- `Number.MIN_VALUE`: El valor numèric més petit representable a JavaScript.
- `Number.POSITIVE_INFINITY`: Representa l'infinit positiu.
- `Number.NEGATIVE_INFINITY`: Representa l'infinit negatiu.
- `Number.NaN`: Representa "No és un número" (NaN).

```javascript
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.NaN); // NaN
```

**Mètodes de l'Objecte Number**

L'objecte `Number` també proporciona mètodes per realitzar operacions comunes amb números:

- `toFixed()`: Converteix un número en una cadena, arrodonint-lo a un nombre específic de decimals.
- `toPrecision()`: Converteix un número en una cadena, especificant el nombre total de dígits (incloent decimals).
- `toString()`: Converteix un número en una cadena.
- `parseFloat()`: Converteix una cadena en un nombre de punt flotant.
- `parseInt()`: Converteix una cadena en un nombre enter.
- `isNaN()`: Verifica si un valor és NaN (No és un número).

```javascript
const numero = 123.456789;

console.log(numero.toFixed(2)); // "123.46"
console.log(numero.toPrecision(4)); // "123.5"
console.log(numero.toString()); // "123.456789"
console.log(parseFloat('3.14')); // 3.14
console.log(parseInt('42')); // 42
console.log(isNaN('Hola')); // true (no es pot convertir en número)
```

**Propietats i Mètodes Estàtics**

L'objecte `Number` també té propietats i mètodes estàtics que no estan relacionats amb instàncies específiques. Alguns exemples són:

- `Number.parseFloat()`: Converteix una cadena en un nombre de punt flotant.
- `Number.parseInt()`: Converteix una cadena en un nombre enter.
- `Number.isNaN()`: Verifica si un valor és NaN (No és un número).
- `Number.isFinite()`: Verifica si un valor és un nombre finit.

```javascript
console.log(Number.parseFloat('3.14')); // 3.14
console.log(Number.parseInt('42')); // 42
console.log(Number.isNaN('Hola')); // false (no és NaN)
console.log(Number.isFinite(5)); // true (és finit)
```
