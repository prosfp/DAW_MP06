# Aplicació i verificació de la sintaxi del llenguatge

## Incrustar JavaScript en un Document HTML

Podeu incrustar codi JavaScript en un document HTML de tres maneres diferents i compatibles entre sí:

=== "JavaScript dins del document HTML"

    ```html
    <body>
       <h1>Pàgina HTML</h1>
       <script>
           alert("Això és codi JavaScript");
       </script>
    </body>
    ```

=== "JavaScript en un fitxer extern"

    ```html
    <!DOCTYPE html>
    <html>
    <head>
        <title>Pàgina amb JavaScript</title>
        <script src="arxiu.js"></script>
    </head>
    <body>
        <h1>Contingut principal</h1>
        <!-- Altres elements HTML -->
    </body>
    </html>
    ```

=== "JavaScript dins d'elements HTML"

    ```html hl_lines="8"
    <!DOCTYPE html>
    <html>
    <head>
        <title>Pàgina amb JavaScript</title>
    </head>
    <body>
        <h1>Contingut principal</h1>
        <button onclick="saluda()">Fes clic aquí</button>
        <script>
            // Codi JavaScript incrustat
            function saluda() {
                alert("Hola, això és JavaScript!");
            }
        </script>
    </body>
    </html>
    ```


És important tenir en compte que, per eficiència en la càrrega de la pàgina, es recomana posar tot el codi JavaScript al final del document HTML, just abans de la marca `</body>`. Això assegura que la major part de la pàgina es carregui abans de l'execució del JavaScript, millorant així la velocitat de càrrega de la pàgina web.


## Manipulació de Dades en JavaScript

En JavaScript, podem manipular dades de diverses maneres. En aquesta secció, explorarem com imprimir dades, escriure comentaris i els set tipus fonamentals de dades en JavaScript.

### Imprimir Dades a la Consola

Per imprimir dades a la consola en JavaScript, utilitzem la funció `console.log()`. Aquesta funció és útil per depurar i mostrar missatges. Aquí tens un exemple:

```javascript
console.log("Aquest és un missatge de prova.");
```

Aquest codi imprimirà el missatge "Aquest és un missatge de prova." a la consola.

### Comentaris en JavaScript

Els comentaris són útils per documentar el teu codi i fer-lo més llegible. JavaScript permet dos tipus de comentaris:

- Comentaris d'una sola línia amb `//`:

```javascript
// Aquest és un comentari d'una sola línia
```

- Comentaris de múltiples línies entre `/*` i `*/`:

```javascript
/_
Aquest és un comentari
de múltiples línies
_/
```

### Tipus de Dades Fonamentals

JavaScript té set tipus de dades fonamentals:

1. **Strings (Cadenes de text):** S'utilitzen per emmagatzemar text, com "Hola, món!".
2. **Numbers (Nombres):** Representen nombres, com 42 o 3.14.
3. **Booleans (Valors booleans):** Representen valors de veritat, `true` o `false`.
4. **Null:** Representa un valor nul o buit.
5. **Undefined:** Representa una variable sense valor assignat.
6. **Symbol (Símbol):** S'utilitza per a la creació de símbols únics.
7. **Objecte (Objecte):** S'utilitza per emmagatzemar col·leccions de dades i funcions.

### Operadors Aritmètics Bàsics

L'aritmètica bàsica sovint és molt útil quan programem.

Un operador és un caràcter que realitza una tasca en el nostre codi. JavaScript té diversos operadors aritmètics incorporats que ens permeten realitzar càlculs matemàtics amb números. Aquests inclouen els següents operadors i els seus símbols corresponents:

- Suma: +
- Resta: -
- Multiplicació: \*
- Divisió: /
- Resta: %

Els quatre primers funcionen com podries suposar:

```javascript
console.log(3 + 4); // Imprimeix 7
console.log(5 - 1); // Imprimeix 4
console.log(4 * 2); // Imprimeix 8
console.log(9 / 3); // Imprimeix 3
```

Cal tenir en compte que quan fem console.log(), l'ordinador avaluarà l'expressió dins dels parèntesis i imprimirà aquest resultat a la consola. Si volguéssim imprimir els caràcters "3 + 4", hauríem d'envoltar-los amb cometes i imprimir-los com una cadena.

```javascript
console.log(11 % 3); // Imprimeix 2
console.log(12 % 3); // Imprimeix 0
```

L'operador de resta, a vegades anomenat mòdul o resta, retorna el número que queda després que el número de la dreta es divideixi pel número de l'esquerra tantes vegades com pugui de manera uniforme: 11 % 3 és igual a 2 perquè 3 s'ajusta a 11 tres vegades, deixant 2 com a residu.

### Recursos externs

- [Codecademy - Tipus de Dades en JavaScript](https://www.codecademy.com/resources/docs/javascript/data-types?page_ref=catalog)
- [MDN Web Docs - Estructures de Dades JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

## Declaració de Variables en JavaScript: `var`, `let` i `const`

En JavaScript, les variables són utilitzades per emmagatzemar dades. Hi ha diferents maneres de declarar variables, com `var`, `let`, i `const`, i cadascuna té les seves particularitats. En aquesta pàgina, explorarem com declarar variables i les diferències clau entre `var`, `let`, i `const`.

### `var`: Declaració de Variables Tradicional

```javascript
function exempleVar() {
  var x = 10;
  if (true) {
    var x = 20; // Aquesta x substitueix la primera x
  }
  console.log(x); // Imprimeix 20
}
```

### `let`: Declaració de Variables Bloc

```javascript
function exempleLet() {
  let y = 30;
  if (true) {
    let y = 40; // Aquesta y és diferent de la primera y
  }
  console.log(y); // Imprimeix 30
}
```

### `const`: Declaració de Constants

```javascript
function exempleConst() {
  const z = 50;
  if (true) {
    // No es pot fer això: z = 60; (dóna error)
  }
  console.log(z); // Imprimeix 50
}
```

En resum, utilitza `let` quan vulguis variables amb àmbit de bloc i que poden ser reassignades, i utilitza `const` quan vulguis declarar constants. Evita utilitzar `var` ja que pot portar a problemes d'àmbit.
