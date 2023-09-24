L'objecte `RegExp`, o objecte Expressió Regular, és una part important de JavaScript que s'utilitza per a les expressions regulars. Les expressions regulars són patrons que s'utilitzen per buscar i manipular text d'acord amb certes regles.

**Creació d'un Objecte `RegExp`**

Pots crear un objecte `RegExp` a JavaScript mitjançant una expressió regular literal o mitjançant el constructor `RegExp()`.

1.  **Utilitzant una Expressió Regular Literal**:

    ```javascript
    const expressioRegular = /patro/; // Crea un objecte RegExp amb la expressió regular
    ```

2.  **Utilitzant el Constructor `RegExp()`**:

    ```javascript
    const expressioRegular = new RegExp('patro'); // Crea un objecte RegExp amb el constructor
    ```

**Mètodes Importants de l'Objecte RegExp**

L'objecte `RegExp` proporciona diversos mètodes per a treballar amb expressions regulars. Aquí tens alguns exemples:

- `test()`: Verifica si una cadena compleix amb un patró i retorna `true` o `false`.

  ```javascript
  const patro = /hola/;
  const cadena = 'Hola, món!';
  const resultat = patro.test(cadena);
  console.log(resultat); // Mostra true
  ```

- `exec()`: Busca una cadena per un patró i retorna una array amb la primera coincidència trobada.

  ```javascript
  const patro = /hola/;
  const cadena = 'Hola, món! Hola, univers!';
  const resultat = patro.exec(cadena);
  console.log(resultat); // Mostra ["hola", index: 0, input: "Hola, món! Hola, univers!", groups: undefined]
  ```

- `match()`: Busca totes les coincidències d'un patró en una cadena i les retorna com una array.

  ```javascript
  const patro = /hola/g;
  const cadena = 'Hola, món! Hola, univers!';
  const resultat = cadena.match(patro);
  console.log(resultat); // Mostra ["hola", "hola"]
  ```

**Recursos per a l'Objecte RegExp**

1. [MDN Web Docs - RegExp](https://developer.mozilla.org/ca/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

2. [W3Schools - JavaScript RegExp Reference](https://www.w3schools.com/jsref/jsref_obj_regexp.asp)

3. [ECMAScript Language Specification - RegExp Object](https://tc39.es/ecma262/#sec-regexp-objects)
