JSON, que significa "JavaScript Object Notation", és un format lleuger d'intercanvi de dades que es fa servir per emmagatzemar i intercanviar dades estructurades. A JavaScript, JSON es fa servir per representar objectes i col·leccions de dades en una forma llestament llegible i fàcil d'entendre.

**Creació i Anàlisi de JSON**

Pots crear i analitzar JSON a JavaScript mitjançant dos mètodes importants:

1. **`JSON.stringify()`**: Aquest mètode pren un objecte JavaScript i el converteix en una cadena JSON.

   ```javascript
   const persona = {
     nom: 'Anna',
     edat: 30,
   };

   const jsonPersona = JSON.stringify(persona);
   console.log(jsonPersona); // Mostra '{"nom":"Anna","edat":30}'
   ```

2. **`JSON.parse()`**: Aquest mètode pren una cadena JSON i la converteix en un objecte JavaScript.

   ```javascript
   const jsonPersona = '{"nom":"Anna","edat":30}';
   const persona = JSON.parse(jsonPersona);
   console.log(persona); // Mostra { nom: 'Anna', edat: 30 }
   ```

**Recursos per a JSON**

1. [MDN Web Docs - JSON](https://developer.mozilla.org/ca/docs/Web/JavaScript/Reference/Global_Objects/JSON)
2. [W3Schools - JSON Introduction](https://www.w3schools.com/js/js_json_intro.asp)clara a JSON amb exemples pràctics.
3. [ECMAScript Language Specification - JSON Object](https://tc39.es/ecma262/#sec-json-object)
