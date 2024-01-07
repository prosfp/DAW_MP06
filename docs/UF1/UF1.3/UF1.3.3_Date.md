L'objecte `Date` és una part important de JavaScript que s'utilitza per a la gestió de dates i hores. Permet crear i manipular dates, calcular intervals de temps i realitzar diverses operacions relacionades amb el temps.

**Creació d'un Objecte `Date`**

Pots crear un objecte `Date` de diverses maneres a JavaScript:

1. **Utilitzant el Constructor `Date()`**:

   ```javascript
   const avui = new Date(); // Crea un objecte Date que representa la data i hora actual.
   ```

2. **Especificant una Data i Hora**:

   ```javascript
   const dataPersonalitzada = new Date('2023-09-24T10:30:00'); // Crea un objecte Date per a una data i hora específiques.
   ```

**Propietats i Mètodes Importants de l'Objecte Date**

L'objecte `Date` proporciona una sèrie de propietats i mètodes per a treballar amb dates i hores. Aquí tens alguns exemples:

- `getFullYear()`: Retorna l'any de la data.

  ```javascript
  const avui = new Date();
  const any = avui.getFullYear();
  console.log(any); // Mostra l'any actual
  ```

- `getMonth()`: Retorna el mes de la data (de 0 a 11).

  ```javascript
  const avui = new Date();
  const mes = avui.getMonth();
  console.log(mes); // Mostra el mes actual (0 correspon a gener, 11 a desembre)
  ```

- `getDate()`: Retorna el dia del mes de la data.

  ```javascript
  const avui = new Date();
  const dia = avui.getDate();
  console.log(dia); // Mostra el dia del mes actual
  ```

**Recursos per a l'Objecte Date**

1. [MDN Web Docs - Date](https://developer.mozilla.org/ca/docs/Web/JavaScript/Reference/Global_Objects/Date)

2. [W3Schools - JavaScript Date Reference](https://www.w3schools.com/jsref/jsref_obj_date.asp)

3. [ECMAScript Language Specification - Date Object](https://tc39.es/ecma262/#sec-date-objects)

4. [JavaScript.Info - Date and Time](https://javascript.info/date)
