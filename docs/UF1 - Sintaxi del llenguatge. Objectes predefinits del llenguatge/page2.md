# Manipulació de Dades en JavaScript

En JavaScript, podem manipular dades de diverses maneres. En aquesta secció, explorarem com imprimir dades, escriure comentaris i els set tipus fonamentals de dades en JavaScript.

## Imprimir Dades a la Consola

Per imprimir dades a la consola en JavaScript, utilitzem la funció `console.log()`. Aquesta funció és útil per depurar i mostrar missatges. Aquí tens un exemple:

```javascript
console.log("Aquest és un missatge de prova.");
```

Aquest codi imprimirà el missatge "Aquest és un missatge de prova." a la consola.

## Comentaris en JavaScript

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

## Tipus de Dades Fonamentals

JavaScript té set tipus de dades fonamentals:

1. **Strings (Cadenes de text):** S'utilitzen per emmagatzemar text, com "Hola, món!".
2. **Numbers (Nombres):** Representen nombres, com 42 o 3.14.
3. **Booleans (Valors booleans):** Representen valors de veritat, `true` o `false`.
4. **Null:** Representa un valor nul o buit.
5. **Undefined:** Representa una variable sense valor assignat.
6. **Symbol (Símbol):** S'utilitza per a la creació de símbols únics.
7. **Objecte (Objecte):** S'utilitza per emmagatzemar col·leccions de dades i funcions.

## Operadors Aritmètics Bàsics

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

## Recursos externs

- [Codecademy - Tipus de Dades en JavaScript](https://www.codecademy.com/resources/docs/javascript/data-types?page_ref=catalog)
- [MDN Web Docs - Estructures de Dades JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
