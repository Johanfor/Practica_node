/*function sumar(a, b) {
    return a + b;
}   
sumar(6, 5) ;
console.log(sumar);*/
//1. Arrow function
const sumar = (a,b) => a + b;
sumar(6,5);//llama a la función sumar
console.log(sumar (6,5));
//2 arrow function que verifica si un número es par
const esPar = (num) => num % 2 === 0;
console.log(esPar(4));//muestra true en la consola

//3. arraw function que convierte grados celcius a fahrenheit
const celsiusAFahrenheit = (celsius) => (celsius * 9/5) + 32;
console.log(celsiusAFahrenheit(25));//muestra 77 en la consola

//4. arraw fubction que calula el area de un rectángulo
const areaRectangulo = (base, altura) => base * altura;
console.log(areaRectangulo(5, 10));//muestra 50 en la consola   

//5. arrow function que devuelve el numero mayor de un array
const numeroMayor = numeros => Math.max(...numeros);
console.log(numeroMayor([3, 7, 2, 9, 4]));//muestra 9 en la consola

//6. arrow function que saluda a una persona por su nombre
const saludar = nombre => `Hola, ${nombre}!`;
console.log(saludar("Juan"));//muestra "Hola, Juan!" en la consola

//7. arrow function que cuenta vocales en un string
const contarVocales = texto => {
    const vocales = texto.match(/[aeiou]/gi);
    return vocales ? vocales.length : 0;
};
console.log(contarVocales("Hola Mundo"));//muestra 4 en la consola

//8. arrow function que invierte un string
const invertirString = texto => texto.split('').reverse().join('');
console.log(invertirString("Hola"));//muestra "aloH" en la consola

//9. arrow function que calcula el factorial de un número
const factorial = num => {
    if (num === 0|| num === 1) return 1;
    let resultado = 1;
    for (let i = 2; i <= num; i++) {
        resultado *= i; 
    }
    return resultado;
};
console.log(factorial(5));//muestra 120 en la consola

//10. 