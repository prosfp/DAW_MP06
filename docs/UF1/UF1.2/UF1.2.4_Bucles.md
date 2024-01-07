# Sentencies i estructures de control

## Estructures Repetitives

Les estructures de repetició permeten executar un conjunt d'instruccions de manera repetida fins que es compleixi una condició específica.

### While:

- El bucle `while` executa un bloc de codi mentre una condició sigui certa. La condició s'avalua abans de cada iteració.

Exemple:

```javascript
let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}
```

### Do...While

- El bucle `do...while` executa un bloc de codi almenys una vegada i després verifica si una condició és certa per a les iteracions següents. La condició es comprova després de cada iteració.

Exemple:

```javascript
let x = 0;
let i = 0;

do {
  x = x + i;
  console.log(x);
  i++;
} while (i < 5);
```

### For

- El bucle `for` és una estructura de repetició que consta de tres parts: inicialització, condició i increment. És útil quan coneixem el nombre d'iteracions.

Exemple:

```javascript
for (let i = 0; i < 4; i++) {
  console.log(i);
}
```

### For Invertit

- Es pot utilitzar un bucle `for` per iterar en sentit invers inicialitzant la variable d'iteració amb un valor inicial màxim i decrementant-la.

Exemple:

```javascript
const items = ['albercoc', 'banana', 'canya'];

for (let i = items.length - 1; i >= 0; i--) {
  console.log(`${i}. ${items[i]}`);
}
```

### For Each

- A partir de JavaScript ES6, pots utilitzar el mètode `forEach` en els arrays per a iterar a través dels seus elements sense necessitat d'un índex.

Exemple:

```javascript
const colors = ['vermell', 'blau', 'verd'];

colors.forEach(function (color) {
  console.log(color);
});
```

### Break

- La paraula clau `break` s'utilitza per sortir immediatament d'un bucle quan es compleix una condició específica.

Exemple:

```javascript
for (let i = 0; i < 99; i++) {
  if (i > 5) {
    break;
  }
  console.log(i);
}
```

### Bucle Anidat ("Nested Loop")

- Un bucle anidat és quan un bucle s'executa dins un altre. L'iteració interior s'executa completament per a cada iteració de l'iteració exterior.

Exemple:

```javascript
for (let outer = 0; outer < 2; outer++) {
  for (let inner = 0; inner < 3; inner++) {
    console.log(`${outer}-${inner}`);
  }
}
```

Aquest ordre d'aprenentatge és progressiu, començant amb les estructures de repetició bàsiques com `while`, `do...while` i `for`, i avançant cap a conceptes més avançats com `forEach`, `break` i bucles anidats. Aquestes estructures són fonamentals per a la programació i l'automatització de tasques repetitives en JavaScript.
