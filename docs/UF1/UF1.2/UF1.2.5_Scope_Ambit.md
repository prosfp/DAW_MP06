# Aplicació i verificació de la sintaxi del llenguatge

**Control de Flux i Estructures Condicionals a JavaScript**

El control de flux és l'ordre en què s'executen les declaracions en un programa. El flux de control per defecte és llegir i executar declaracions en ordre de d'esquerra a dreta i de dalt a baix en un fitxer de programa.

Estructures de control com condicionals (if i altres) alteren el flux de control executant només blocs de codi si es compleixen certes condicions. Aquestes estructures permeten al programa prendre decisions sobre quin codi s'executa a mesura que s'executa el programa.

**Operador Lògic ||**
L'operador lògic OR || comprova dos valors i retorna un booleà. Si un o ambdós valors són veritat, retorna veritat. Si tots dos valors són falsos, retorna fals.

Exemple:

```javascript
true || false; // true
10 > 5 || 10 > 20; // true
false || false; // false
10 > 100 || 10 > 20; // false
```

**Operador Ternari**
L'operador ternari permet una sintaxi compacta per a decisions binàries. Accepta una condició seguida de l'operador ?, i després dues expressions separades per :. Si la condició és veritat, s'executa la primera expressió; sinó, s'executa la segona.

Exemple:

```javascript
let preu = 10.5;
let dia = 'Dilluns';

dia === 'Dilluns' ? (preu -= 1.5) : (preu += 1.5);
```

**Instrucció else**
Un bloc `else` es pot afegir a una instrucció `if` o sèrie d'instruccions `if-else if`. El bloc `else` s'executarà només si la condició `if` no es compleix.

Exemple:

```javascript
const tascaCompletada = false;

if (tascaCompletada) {
  console.log('Tasca completada');
} else {
  console.log('Tasca incompleta');
}
```

**Operador Lògic &&**
L'operador lògic AND && comprova dos valors i retorna un booleà. Només retorna veritat si tots dos valors són veritat. Si un o tots dos són falsos, retorna fals.

Exemple:

```javascript
true && true; // true
1 > 2 && 2 > 1; // false
true && false; // false
4 === 4 && 3 > 1; // true
```

**Instrucció switch**
L'estructura `switch` proporciona una manera de comprovar una expressió contra diversos casos. Si hi ha una coincidència de cas, s'executa el codi d'aquell cas. S'ha d'utilitzar `break` per sortir del `switch` o s'executaran altres casos també.

Exemple:

```javascript
const menjar = 'amanida';

switch (menjar) {
  case 'ostres':
    console.log('El gust del mar 🦪');
    break;
  case 'pizza':
    console.log('Una deliciosa pizza 🍕');
    break;
  default:
    console.log('Bonic àpat');
}
```

**Instrucció if**
L'estructura `if` avalua una expressió amb parèntesis. Si l'expressió és veritat, s'executarà el cos del `if`. Si és falsa, no s'executarà.

Exemple:

```javascript
const correuEnviat = true;

if (correuEnviat) {
  console.log('Correu enviat al destinatari');
}
```

**Operador Lògic !**
L'operador lògic NOT `!` es pot utilitzar per invertir un valor booleà o la veritat d'un valor no booleà.

Exemple:

```javascript
let tard = true;
let valorInvertit = !tard;

console.log(valorInvertit); // Imprimeix: false
```

**Operadors de Comparació**
Els operadors de comparació s'utilitzen per comparar dos valors i retornar veritat o fals segons la validesa de la comparació.

Exemple:

```javascript
1 > 3; // false
3 > 1; // true
250 >= 250; // true
1 === 1; // true
1 === 2; // false
1 === '1'; // false
```

**Instrucció else if**
Després d'un bloc `if`, els blocs `else if` poden comprovar condicions addicionals. Es pot afegir un bloc `else` opcional per executar-se per defecte si cap de les condicions s'avalua com a veritat.

Exemple:

```javascript
const mida = 10;

if (mida > 100) {
  console.log('Gran');
} else if (mida > 20) {
  console.log('Mitjà');
} else if (mida > 4) {
  console.log('Petit');
} else {
  console.log('Molt petit');
}
```
