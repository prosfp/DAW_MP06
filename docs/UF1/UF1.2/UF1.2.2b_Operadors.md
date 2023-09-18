# Operadors

Els operadors en JavaScript són eines que es utilitzen per realitzar operacions sobre valors. Com les matemàtiques, els operadors tenen diferents prioritats i, en alguns casos, es poden utilitzar parèntesis per canviar la prioritat d'execució. Aquí tens una visió general dels operadors més comuns en JavaScript:

## Operadors Aritmètics

- `+` (suma)
- `-` (resta)
- `*` (multiplicació)
- `/` (divisió)
- `%` (mòdul o residu)
- `++` (increment)
- `--` (decrement)
- `**` (exponenciació)

Exemple d'operadors aritmètics:

```javascript
let a = 5;
let b = 3;

let suma = a + b; // 8
let resta = a - b; // 2
let multiplicacio = a * b; // 15
let divisio = a / b; // 1.6666666666666667
let modul = a % b; // 2
let increment = a++; // (a ara és 6)
let decrement = b--; // (b ara és 2)
let exponenciacio = a ** b; // 36
```

## Operadors de Cadenes

- `+` (concatenació de cadenes)
- `+=` (concatenació i assignació)

Exemple d'operadors de cadenes:

```javascript
let missatge = 'Hola, ' + 'món!'; // "Hola, món!"
let concatenacioAssignacio = 'Hola, ';
concatenacioAssignacio += 'amics!'; // "Hola, amics!"
```

## Operadors d'Assignació

- `=` (assignació)
- `+=` (assignació i suma)
- `-=` (assignació i resta)
- `*=` (assignació i multiplicació)
- `/=` (assignació i divisió)
- `%=` (assignació i residu)

Exemple d'operadors d'assignació:

```javascript
let x = 10;
x += 5; // x ara és 15
x -= 3; // x ara és 12
x *= 2; // x ara és 24
x /= 4; // x ara és 6
x %= 5; // x ara és 1
```

## Operadors de Comparació

- `==` (igual a, compara només contingut)
- `===` (igual a estrict, compara tipus i contingut)
- `!=` (diferent de, compara només contingut)
- `!==` (diferent de estrict, compara tipus i contingut)
- `<` (menor que)
- `>` (major que)
- `<=` (menor o igual que)
- `>=` (major o igual que)

Exemple d'operadors de comparació:

```javascript
let num1 = 5;
let num2 = '5';

console.log(num1 == num2); // true (contingut igual)
console.log(num1 === num2); // false (tipus diferents)
console.log(num1 != num2); // false (contingut igual)
console.log(num1 !== num2); // true (tipus diferents)
console.log(num1 < num2); // false
console.log(num1 > num2); // false
console.log(num1 <= num2); // true
console.log(num1 >= num2); // true
```

## Operadors Lògics

- `&&` (AND lògic)
- `||` (OR lògic)
- `!` (NOT lògic)

Exemple d'operadors lògics:

```javascript
let cert = true;
let fals = false;

console.log(cert && fals); // false
console.log(cert || fals); // true
console.log(!cert); // false
```

Aquests operadors són fonamentals per a la programació en JavaScript i es fan servir àmpliament per realitzar operacions i prendre decisions en el teu codi.

## Operadors Binaris (Bitwise)

- `&` (AND)
- `|` (OR)
- `~` (NOT)
-
