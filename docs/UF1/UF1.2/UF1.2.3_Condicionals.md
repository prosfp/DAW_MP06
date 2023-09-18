# Control de Flux i Estructures Condicionals a JavaScript

El control de flux és l'ordre en què s'executen les declaracions en un programa. Les estructures condicionals alteren aquest flux permetent que només s'executi el codi si es compleixen certes condicions. Aquí tens alguns dels conceptes bàsics:

1.  **Instrucció IF**

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

2.  **Instrucció ELSE**

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

3.  **Instrucció else if**

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

4.  **Operadors Lògics**

    - Utilitza els operadors lògics com `&&` (i), `||` (o) i `!` (no) per a realitzar operacions lògiques entre valors booleans o avaluacions.

    Exemple:

    ```javascript
    true && true; // true
    1 > 2 && 2 > 1; // false
    true || false; // false
    !true; // false
    ```

5.  **Instrucció switch**

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

6.  **Operadors de Comparació**

    - Utilitza operadors com `===`, `!==`, `>`, `>=`, `<` i `<=` per comparar valors i obtenir un resultat boolean.

    Exemple:

    ```javascript
    1 > 3; // false
    3 > 1; // true
    250 >= 250; // true
    1 === 1; // true
    1 === 2; // false
    ```

7.  **Veritat i Falsedat**

    - A JavaScript, els valors es poden avaluar com a veritat o falsedat.
    - Falsedat inclou valors com `false`, `0`, cadenes buides, `null`, `undefined`, i `NaN`. Tots els altres valors són veritat.

    Exemple:

    ```javascript
    const valor = 0;

    if (valor) {
      console.log('El valor és veritat');
    } else {
      console.log('El valor és falsedat');
    }
    ```
