# Declaració de Variables en JavaScript: `var`, `let` i `const`

En JavaScript, les variables són utilitzades per emmagatzemar dades. Hi ha diferents maneres de declarar variables, com `var`, `let`, i `const`, i cadascuna té les seves particularitats. En aquesta pàgina, explorarem com declarar variables i les diferències clau entre `var`, `let`, i `const`.

## `var`: Declaració de Variables Tradicional

```javascript
function exempleVar() {
  var x = 10;
  if (true) {
    var x = 20; // Aquesta x substitueix la primera x
  }
  console.log(x); // Imprimeix 20
}
```

## `let`: Declaració de Variables Bloc

```javascript
function exempleLet() {
  let y = 30;
  if (true) {
    let y = 40; // Aquesta y és diferent de la primera y
  }
  console.log(y); // Imprimeix 30
}
```

## `const`: Declaració de Constants

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
