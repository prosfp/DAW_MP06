# Sentencies i estructures de control:

## Estrucutres Condicionals

El control de flux és l'ordre en què s'executen les declaracions en un programa. Les estructures condicionals alteren aquest flux permetent que només s'executi el codi si es compleixen certes condicions. Aquí tens alguns dels conceptes bàsics:

### Instrucció IF

    - L'estructura `if` avalua una expressió amb parèntesis.
    - Si l'expressió és veritat, s'executa el codi dins del bloc `if`.
    - Si l'expressió és falsa, el codi del bloc `if` no s'executa.

    Exemple:

    ```javascript
    const correuEnviat = true;

    if (correuEnviat) {
      console.log('Correu enviat al destinatari');
    }
    ```

### Instrucció ELSE

    - Pots afegir un bloc `else` després d'una instrucció `if`.
    - El bloc `else` s'executa només si la condició de `if` és falsa.

    Exemple:

    ```javascript
    const tascaCompletada = false;

    if (tascaCompletada) {
      console.log('Tasca completada');
    } else {
      console.log('Tasca incompleta');
    }
    ```

### Instrucció ELSE IF

- Després d'un bloc `if`, pots utilitzar múltiples blocs `else if` per comprovar condicions addicionals.
- Un bloc `else` opcional pot executar-se per defecte si cap de les condicions `if` o `else if` s'avalua com a veritat.

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

### Operador Ternari

Sembla que tens un error en el format del teu contingut Markdown. Per aconseguir l'efecte desitjat amb el format que has proporcionat, has de col·locar el text i els blocs de codi en llocs adequats. Aquí tens el teu contingut amb els canvis necessaris:

!!! info inline end "Com ens ajuden?"

    L'ús d'operadors ternaris pot fer que el codi sigui més concís i llegible quan es tracta de condicions senzilles. No obstant això, en casos de condicions més complexes, pot ser més clar utilitzar declaracions `if-else` convencionals per mantenir el codi més comprensible.

L'operador ternari és una forma concisa d'expressar condicions en JavaScript:

```javascript
condició ? valorSiCert : valorSiFals;
```

- Si la condició és certa (avalia a `true`), s'avalua `valorSiCert`.
- Si la condició és falsa (avalia a `false`), s'avalua `valorSiFals`.

Això permet definir una expressió que retornarà un valor basat en una condició sense la necessitat d'una estructura de control `if-else`. Aquí tens un exemple senzill:

```javascript
const edat = 25;
const elegibilitat = edat >= 18 ? 'És major d'edat' : 'No és major d'edat';
console.log(elegibilitat); // Mostrarà 'És major d'edat' ja que la condició és certa.
```

En aquest exemple, `elegibilitat` prendrà el valor `'És major d'edat'` si `edat` és igual o major de 18, i prendrà el valor `'No és major d'edat'` si `edat` és menor que 18.

També pots encadenar múltiples operadors ternaris per aconseguir l'efecte d'un bloc `else if`. Aquí tens un exemple:

```javascript
const puntuació = 75;
const notaFinal =
  puntuació >= 90
    ? 'A'
    : puntuació >= 80
    ? 'B'
    : puntuació >= 70
    ? 'C'
    : puntuació >= 60
    ? 'D'
    : 'F';
console.log(notaFinal); // Mostrarà 'C' ja que la puntuació és 75.
```

### Instrucció switch

- L'estructura `switch` et permet comprovar una expressió contra diversos casos.
- Cada cas pot contenir codi que s'executa si la coincidència és veritat.
- Utilitza `break` per sortir del `switch` o continua amb altres casos.

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

## Operadors Lògics

- Utilitza els operadors lògics com `&&` (i), `||` (o) i `!` (no) per a realitzar operacions lògiques entre valors booleans o avaluacions.

Exemple:

```javascript
true && true; // true
1 > 2 && 2 > 1; // false
true || false; // false
!true; // false
```

## Operadors de Comparació

- Utilitza operadors com `===`, `!==`, `>`, `>=`, `<` i `<=` per comparar valors i obtenir un resultat boolean.

Exemple:

```javascript
1 > 3; // false
3 > 1; // true
250 >= 250; // true
1 === 1; // true
1 === 2; // false
```

## "Truthy" i "Falsy"

- A JavaScript, els valors es poden avaluar com a veritat (Truthy) o falsedat (Falsy).

Exemple:

```javascript
const valor = 0;

if (valor) {
  console.log('El valor és veritat');
} else {
  console.log('El valor és falsedat');
}
```

| Falsy                                 | Truthy                                                |
| ------------------------------------- | ----------------------------------------------------- |
| `false`                               | Qualsevol valor que no sigui fals                     |
| `0` (zero)                            | Nombres diferents de zero (exemples: 1, -1)           |
| `-0` (zero negatiu)                   | `0.1`                                                 |
| `0n` (BigInt zero)                    | Qualsevol cadena de text no buida (exemple: "hola")   |
| `''`, `""`, `` (cadena de text buida) | `null`                                                |
| `null`                                | `undefined`                                           |
| `undefined`                           | `NaN` (No és un número)                               |
| `NaN` (No és un número)               | Qualsevol altra cosa (exemples: '0', 'false', [], {}) |
