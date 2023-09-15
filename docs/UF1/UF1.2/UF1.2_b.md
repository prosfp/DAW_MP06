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
console.log('Aquest és un missatge de prova.');
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
/*
Aquest és un comentari
de múltiples línies
*/
```

### Tipat dinàmic

JavaScript és un llenguatge feblement tipat i dinàmic. Les variables a JavaScript no estan associades directament a cap tipus de valor en particular, i a qualsevol variable se li pot assignar (i reassignar) valors de tots els tipus:

```javascript
let foo = 42; // foo ara és un número
foo = 'bar'; // foo ara és una cadena de text
foo = true; // foo ara és un booleà
```

### Tipus de Dades

### Estructures i tipus de dades

L'últim estàndard ECMAScript defineix nou tipus:

Sis tipus de dades primitives (els tipus de dades més bàsics i senzills en un llenguatge), controlades per l'operador `typeof`:

- **Undefined**: indica que una variable existeix però no té valor assignat
- **Boolean**
- **Number**
- **String**
- **BigInt**
- **Symbol**

**Null**: Indica que una variable existeix i que s'ha configurat com a buida o sense valor. Null és un valor vàlid en JavaScript i pot ser utilitzat en càlculs o comparacions com qualsevol altre valor. Per contra, undefined no es pot utilitzar de la mateixa manera ja que indica una falta de valor o assignació.

**Object**: són estructures de dades que poden contenir múltiples valors i funcions. Estan formats per un conjunt de parells clau-valor, on el clau és una cadena de text (anomenada "proprietat") i el valor pot ser qualsevol tipus de dada, inclòs un altre objecte. També s'utilitza per estructures de dades com: new Object, new Array, new Map, new Set, new WeakMap, new WeakSet, new Date i gairebé tot fet amb la paraula clau new.

**Function**: són blocs reutilitzables de codi que poden acceptar arguments i realitzar tasques específiques. Les funcions poden ser assignades a variables, passades com a arguments a altres funcions i fins i tot retornades com valors de d'altres funcions. Les funcions també tenen propietats i mètodes especials, com ara length (que indica el nombre d'arguments esperats) i call (que permet cridar una funció amb un objecte específic com a context).

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

**VAR** Declaració de Variables Tradicional

- La declaració var és la més antiga i amplament utilitzada abans de l'aparició d'let i const.
- Les variables declarades amb var són funció-scòpic, la qual cosa significa que només tenen visibilitat dins de la funció en què es declaren.
- Es pot redeclarar la mateixa variable var sense cap advertència.
- Les variables var apliquen "hoisting", la qual cosa significa que es poden utilitzar abans de la seva declaració.

```javascript
function exempleVar() {
  var x = 10;
  if (true) {
    var x = 20; // Aquesta x substitueix la primera x
  }
  console.log(x); // Imprimeix 20
}
```

**LET** Declaració de Variables Bloc

- La declaració let es va introduir a ES6 (ECMAScript 2015) i és preferible a var.
- Les variables declarades amb let són bloc-scòpic, la qual cosa significa que només tenen visibilitat dins del bloc (com ara una funció o un bucle) en què es declaren.
- No es pot redeclarar la mateixa variable let dins del mateix bloc.
- Les variables let també estan hissades, però només estan disponibles després de la seva declaració.

```javascript
function exempleLet() {
  let y = 30;
  if (true) {
    let y = 40; // Aquesta y és diferent de la primera y
  }
  console.log(y); // Imprimeix 30
}
```

**CONST** Declaració de Constants

- La declaració const també es va introduir a ES6 i s'utilitza per declarar variables amb valors constants que no canviaran.
  Les variables declarades amb const també són bloc-scòpic com let.
- No es pot reassignar un nou valor a una variable const després de la seva inicialització. No obstant això, si és un objecte o un array, els seus continguts es poden modificar.
- Les variables const també estan hissades i només estan disponibles després de la seva declaració.

```javascript
function exempleConst() {
  const z = 50;
  if (true)
    // No es pot fer això: z = 60; (dóna error)
    z = 60;
  }
  console.log(z); // Imprimeix 50
}
```

En resum, utilitza `let` quan vulguis variables amb àmbit de bloc i que poden ser reassignades, i utilitza `const` quan vulguis declarar constants. Evita utilitzar `var` ja que pot portar a problemes d'àmbit.
