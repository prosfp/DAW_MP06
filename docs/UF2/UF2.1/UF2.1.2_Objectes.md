# Objectes en JavaScript

Els objectes són una part fonamental de JavaScript que permeten emmagatzemar dades en forma de parelles clau-valor. A continuació, explorarem com treballar amb objectes i les seves característiques.

##Introducció als Objectes

Els objectes són estructures de dades clau-valor en JavaScript que permeten emmagatzemar informació relacionada. Aquí tens alguns conceptes fonamentals:

- **Parelles Clau-Valor**: Les propietats d'un objecte es defineixen com parelles clau-valor, on cada clau (o propietat) està associada amb un valor.
- **Notació d'Objecte**: Pots crear objectes utilitzant la notació d'objecte, que implica l'ús de les claus `{}` i separar les propietats amb comes.

Exemple d'objecte simple:

```javascript
const persona = {
  nom: 'John',
  edat: 30,
  casat: false,
};
```

## Accedir a les Propietats

Per accedir a les propietats d'un objecte, pots utilitzar dues formes principals:

### Notació de Punt

Utilitza la notació de punt (`object.propietat`) per accedir a una propietat específica d'un objecte.

Exemple:

```javascript
console.log(persona.nom); // "John"
```

### Notació de Corxetes

Pots utilitzar la notació de corxetes (`object['propietat']`) per accedir a les propietats quan la clau és una variable o conté caràcters especials.

Exemple:

```javascript
const clau = 'edat';
console.log(persona[clau]); // 30
```

## Objectes Anidats

Els objectes poden contenir altres objectes, creant una estructura anidada. Això permet organitzar les dades de manera jeràrquica.

Exemple d'objecte anidat:

```javascript
const cotxe = {
  marca: 'Toyota',
  model: 'Corolla',
  motor: {
    cilindres: 4,
    potencia: '120CV',
  },
};
```

Per accedir a les propietats anidades, utilitza la notació de punt o corxetes com abans.

## Crear Propietats Dinàmiques

JavaScript permet afegir noves propietats als objectes després de la seva creació i canviar els seus valors.

Exemple d'afegir una nova propietat:

```javascript
persona.professio = 'Enginyer';
```

## Eliminar Propietats

Pots eliminar propietats d'un objecte utilitzant l'operador `delete`.

Exemple:

```javascript
delete persona.casat;
```

## Iterar sobre Propietats

Per iterar sobre les propietats d'un objecte, pots utilitzar el bucle `for...in`.

Exemple d'iteració:

```javascript
for (let clau in persona) {
  console.log(clau + ': ' + persona[clau]);
}
```

## Objectes Mutables

Els objectes en JavaScript són mutables, el que significa que el seu contingut pot canviar, fins i tot si es declaren com a constants utilitzant `const`. La referència a l'objecte és la que no es pot canviar.

Així doncs, en el cas d'un objecte declarat com a constant amb `const`, no podem fer el següent:

```javascript
const persona = {
  nom: 'Maria',
  edat: 30,
};

// Això no es permet amb una constant
persona = {}; // Error: Assignment to constant variable.
```

Però, encara podem fer el següent sense problemes:

```javascript
const persona = {
  nom: 'Maria',
  edat: 30,
};

// Podem modificar les propietats de l'objecte
persona.nom = 'Lluisa';
persona.edat = 35;

console.log(persona); // { nom: 'Lluisa', edat: 35 }
```

En aquest cas, no estem canviant l'objecte en si mateix (`persona` segueix apuntant al mateix objecte), sinó que estem modificant les propietats de l'objecte, la qual cosa és totalment vàlida amb una constant.

## Getter i Setter

!!! info inline end "Utilitat de Getters i Setters"

    Els getters i setters són mètodes especials que es poden definir en un objecte JavaScript per controlar l'accés i la modificació de les seves propietats. Aquí teniu algunes raons per les quals són útils:

    **Control de l'accés**: Els getters i setters permeten imposar restriccions i validacions en l'accés i la modificació de les propietats.

    **Encapsulació**: Faciliten la encapsulació de les dades, ocultant els detalls interns de com es magatzemen les propietats.

    **Validació de Dades**: Amb els setters, podeu validar les dades abans d'assignar-les a una propietat.

    **Compatibilitat amb Versions Anteriors**: Manteniu la compatibilitat amb codi existent mitjançant getters i setters, fins i tot si canvieu la implementació interna.

    **Evitar Efectes Secundaris**: Poden ajudar a evitar efectes secundaris no desitjats quan es canvia una propietat.

**Getter**: Un getter és un mètode que s'utilitza per obtenir el valor d'una propietat d'un objecte.

**Setter**: Un setter és un mètode que s'utilitza per assignar un valor a una propietat d'un objecte.

**Exemple**:

```javascript
const persona = {
  _edat: 0, // Nota: Per convenció, les propietats privades es comencen amb un guion baix (_).

  // Getter per obtenir l'edat
  get edat() {
    return this._edat;
  },

  // Setter per assignar una nova edat amb validació
  set edat(novaEdat) {
    if (novaEdat >= 0 && novaEdat <= 120) {
      this._edat = novaEdat;
    } else {
      console.error('Edat no vàlida');
    }
  },
};

// Utilitzant el setter per assignar una edat vàlida
persona.edat = 25;

// Utilitzant el getter per obtenir l'edat
console.log(persona.edat); // Resultat: 25

// Intentant assignar una edat no vàlida
persona.edat = 150; // Això generaria un missatge d'error

// Accedint a la propietat _edat directament (no recomanat, ja que evitem la validació)
console.log(persona._edat); // Resultat: 25
```

En aquest exemple, el getter `edat` ens permet obtenir el valor de la propietat `_edat`, mentre que el setter `edat` ens permet assignar un valor a aquesta propietat amb validació. Això ens permet controlar i validar l'accés i la modificació de la propietat `edat`.

## Objectes com a Arguments de Funcions

Quan un objecte es passa com a argument a una funció a JavaScript, aquest objecte es passa per referència, no per valor. Això significa que, en realitat, s'està passant una referència a l'objecte original, no una còpia de l'objecte.

```javascript
// Definim un objecte
const cotxe = {
  marca: 'Toyota',
  model: 'Corolla',
};

// Funció que modifica l'objecte rebut com a argument
function canviarMarca(coche) {
  coche.marca = 'Honda';
}

console.log(cotxe.marca); // Abans de cridar la funció: "Toyota"

// Cridem la funció i passem l'objecte cotxe com a argument
canviarMarca(cotxe);

console.log(cotxe.marca); // Després de cridar la funció: "Honda"
```

S'ha de tenir cura quan passeu objectes com a arguments, ja que les modificacions poden afectar l'objecte original. Si voleu evitar aquest comportament i treballar amb una còpia de l'objecte, podeu crear-ne una còpia explícita abans de passar-lo com a argument o dins de la funció.

### Còpia explícita

Podeu crear una còpia explícita d'un objecte a JavaScript de diverses maneres, depenent de la vostra preferència i de les eines disponibles en el vostre entorn. Aquí teniu dues maneres comunes de fer-ho:

**1. Mitjançant l'operador d'objecte `{...}` (Operador de propagació)**

Aquesta és una forma simple i eficaç de crear una còpia superficial d'un objecte:

```javascript
const original = { nom: 'Alice', edat: 30 };
const copia = { ...original };

console.log(copia); // { nom: "Alice", edat: 30 }

// Modificar la còpia no afecta l'original
copia.nom = 'Bob';
console.log(original.nom); // "Alice"
console.log(copia.nom); // "Bob"
```

**2. Mitjançant la funció `Object.assign()`**

`Object.assign()` permet combinar diverses propietats d'objectes en un objecte de destí. Utilitzant un objecte buit com a destí, podeu crear una còpia d'un objecte:

```javascript
const original = { nom: 'Alice', edat: 30 };
const copia = Object.assign({}, original);

console.log(copia); // { nom: "Alice", edat: 30 }

// Modificar la còpia no afecta l'original
copia.nom = 'Bob';
console.log(original.nom); // "Alice"
console.log(copia.nom); // "Bob"
```

Les dues d'aquestes opcions us permeten crear una còpia superficial d'un objecte, el que significa que només es copiaran les propietats principals i no les propietats anidades (si n'hi ha). Si teniu objectes anidats i voleu una còpia profunda (còpia de tots els objectes anidats), hauríeu de fer servir mètodes més avançats com `JSON.parse()` i `JSON.stringify()`, o utilitzar llibreries externes com `lodash`.

## Funcions com a Propietats d'Objectes

Els objectes poden contenir funcions com a propietats, conegudes com a ==mètodes==. Aquests mètodes poden ser invocats utilitzant la notació de punt.

Exemple de mètode:

```javascript
const cotxe = {
  marca: 'Toyota',
  model: 'Corolla',
  iniciar: function () {
    console.log("El cotxe s'inicia.");
  },
};
```

## `this` en JavaScript

La paraula clau `this` és una característica fonamental de JavaScript que fa referència a l'objecte actual o al context en què s'està executant el codi. El seu ús i valor poden variar segons el context. Aquí tens un resum del seu ús i funcionalitat:

**Dins d'un Objecte**: En els mètodes d'un objecte, `this` fa referència a l'objecte que conté el mètode. S'utilitza per accedir a les propietats i mètodes d'aquest objecte.

```javascript
const cotxe = {
  marca: 'Toyota',
  model: 'Corolla',

  informacio: function () {
    console.log(`Marca: ${this.marca}, Model: ${this.model}`);
  },
};

cotxe.informacio(); // Marca: Toyota, Model: Corolla
```

**Dins d'una Funció Global**: En una funció que no és un mètode d'un objecte, `this` fa referència a l'objecte global (normalment `window` en un navegador) o `undefined` en mode estricte (`'use strict';`).

```javascript
function mostrarThis() {
  console.log(this); // Referència a l'objecte global (window en un navegador)
}

mostrarThis();
```

**Dins d'un Constructor d'Objectes**: Dins d'un constructor, `this` fa referència a l'objecte que es crea mitjançant el constructor. S'utilitza per assignar valors a les propietats de l'objecte.

```javascript
function Persona(nom) {
  this.nom = nom;
}

const persona1 = new Persona('Alice');
console.log(persona1.nom); // "Alice"
```

**Dins de Mètodes d'Array**: En mètodes d'array com `forEach`, `map`, `filter`, `reduce`, etc., `this` fa referència a l'objecte actual de l'array.

```javascript
const nombres = [1, 2, 3];

nombres.forEach(function (numero) {
  console.log(this); // Referència a l'objecte actual (nombres)
}, nombres);
```

## Objectes Anònims

Pots crear objectes sense assignar-los a una variable. Aquests s'anomenen objectes anònims i són útils per a una sola utilització.

Exemple d'objecte anònim:

```javascript
const info = {
  nom: 'Anna',
  edat: 25,
};
```

Aquest temari et proporciona una base sòlida per entendre els objectes en JavaScript i com utilitzar-los eficaçment per emmagatzemar i manipular dades.
