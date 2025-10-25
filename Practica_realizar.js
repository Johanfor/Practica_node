//1. Crea hola() que devuelva una promesa resuelta con "Hola Mundo" después de 200 ms. Consúmela con then y con await.
const hola = () => new Promise(res => setTimeout(() => res("Hola Mundo"), 200));

// Usando then
hola().then(mensaje => console.log("then:", mensaje));

// Usando async/await
(async () => {
  const msg = await hola();
  console.log("await:", msg);
})();

/*2. Crea validarNumero(n) que:
si n no es número o es NaN, rechaza con Error("No es número").
si es número, resuelve con n * 2 tras 150 ms.
Maneja el error con try/catch.*/
function validarNumero(n) {
  return new Promise((resolve, reject) => {
    try {
      if (typeof n !== 'number' || isNaN(n)) {
        throw new Error("No es número");
      }
      setTimeout(() => {
        resolve(n * 2);
      }, 150);
    } catch (error) {
      reject(error);
    }
  });
}
validarNumero(5)
  .then(resultado => console.log("Resultado:", resultado))
  .catch(error => console.error("Error:", error.message));

validarNumero("texto")
  .then(resultado => console.log("Resultado:", resultado))
  .catch(error => console.error("Error:", error.message));  

 /* 3) Encadenar transformaciones
Enunciado: Con obtenerBase() que devuelve 10 tras 100 ms, encadena:
sumar 5,
multiplicar por 3,
convertir a string "resultado: X".*/
const obtenerBase = () => new Promise(res => setTimeout(() => res(10), 100));

obtenerBase()   
    .then(base => base + 5)
    .then(suma => suma * 3)
    .then(producto => `resultado: ${producto}`)
    .then(resultadoFinal => console.log(resultadoFinal))
    .catch(console.error);

/*4) Paralelizar con Promise.all
Enunciado: Crea tarea(id, ms) que resuelva id tras ms. Lanza 3 tareas en paralelo (300, 100, 200) y muestra el array de resultados.*/
function tarea(id, ms) {
  return new Promise(res => setTimeout(() => res(id), ms));
}   
Promise.all([
    tarea(1, 300),
    tarea(2, 100),    
    tarea(3, 200)
])
.then(resultados => console.log("Resultados:", resultados))
.catch(console.error);
// Función que devuelve una promesa que resuelve el id después de ms milisegundos
function tarea(id, ms) {
  return new Promise(resolve => {
    setTimeout(() => resolve(id), ms);
  });
}
/*5) El primero en llegar con race
Enunciado: Con dos tareas (150 ms y 400 ms), usa Promise.race para imprimir cuál terminó primero.*/
Promise.race([
    tarea('Tarea 1', 150),
    tarea('Tarea 2', 400)
])
.then(primero => console.log("Primero en completar:", primero))
.catch(console.error);
// Función que devuelve una promesa que resuelve el id después de ms milisegundos
function tarea(id, ms) {
  return new Promise(resolve => {
    setTimeout(() => resolve(id), ms);
  });
}

/*6) allSettled con éxito y error
Enunciado: Ejecuta 3 promesas, donde una falle. Usa Promise.allSettled y muestra status de cada una.*/
Promise.allSettled([
    tarea('Tarea 1', 100),
    Promise.reject(new Error("Fallo en Tarea 2")),
    tarea('Tarea 3', 200)
])
.then(resultados => {
    resultados.forEach((resultado, index) => {
        if (resultado.status === 'fulfilled') {
            console.log(`Tarea ${index + 1} cumplida con valor:`, resultado.value);
        } else {
            console.log(`Tarea ${index + 1} rechazada con razón:`, resultado.reason.message);
        }
    });
})
.catch(console.error);  

// Función que devuelve una promesa que resuelve el id después de ms milisegundos
function tarea(id, ms) {
  return new Promise(resolve => {
    setTimeout(() => resolve(id), ms);
  });
}

/*8) Secuencial por dependencia
Enunciado: Simula un flujo:
login(user, pass) → resuelve {token} (100 ms),
perfil(token) → resuelve {nombre} (120 ms).
Ejecuta secuencialmente (perfil depende del token).*/
// Función que simula login y devuelve un token tras 100 ms
function login(user, pass) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ token: "abc123" }), 100);
  });
}

// Función que simula obtener perfil usando el token tras 120 ms
function perfil(token) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ nombre: "Usuario Ejemplo" }), 120);
  });
}

// Flujo secuencial: login → perfil
login("usuario", "contraseña")
  .then(({ token }) => perfil(token))
  .then(({ nombre }) => console.log("Nombre del usuario:", nombre))
  .catch(console.error);

/*9) Map paralelo + manejo de errores
Enunciado: Dadas ids = [1, 2, 0, 3] y getUsuario(id) que rechaza si id <= 0, 
obtén todos los usuarios en paralelo y muestra cuáles fallaron sin detener el resto.*/
const ids = [1, 2, 0, 3];

function getUsuario(id) {   
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id <= 0) {
                reject(new Error(`ID inválido: ${id}`));
            } else {
                resolve({ id, nombre: `Usuario${id}` });
            }
        }, 100);
    });
}

Promise.allSettled(ids.map(id => getUsuario(id)))
    .then(resultados => {
        resultados.forEach((resultado, index) => {
            if (resultado.status === 'fulfilled') { 
                console.log(`Usuario obtenido:`, resultado.value);
            } else {
                console.error(`Error al obtener usuario con ID ${ids[index]}:`, resultado.reason.message);
            }
        });
    })
    .catch(console.error);  

    











