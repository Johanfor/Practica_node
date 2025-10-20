/*console.log(x); // undefined (existe, pero aún sin valor)
var x = 10;*/

/*// let/const: TDZ (Temporal Dead Zone)

try {
  console.log(y); // ReferenceError
} catch(e) { console.log('Error esperado:', e.message); }
let y = 20;*/


/*// block scope
{
  let a = 1;
  const b = 2;
  var c = 3;   // c escapa del bloque
}
//console.log(a, b); // ReferenceError
console.log(c); // 3
*/

/*// const con objetos
const persona = { nombre: 'Ana' };
persona.nombre = 'Ana María'; // ✓ mutación permitida
// persona = {} // ✗ TypeError: no puedes reasignar la referencia
console.log(persona.nombre); // Ana María*/

 /*const cuadrado = n => n * n;
 console.log(cuadrado(5));*/

/* const esPar    = n => n % 2 === 0;
    console.log(esPar(4)); // true*/

/*const filtraMayores = (arr, t) => arr.filter(n => n > t);
console.log(filtraMayores([1,5,8,2], 4)); // [5,8]*/

/*// A) sincrónico
function procesar(valor, cb) {
  const resultado = valor * 3;
  cb(resultado);//parametro que se devuelve por referencia
}
procesar(5, r => console.log('A)', r)); // A) 15*/




