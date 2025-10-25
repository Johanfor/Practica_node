//1) “Hola después”

const holaLuego = (ms) => new Promise(res => setTimeout(() => res("Hola"), ms));

//then
holaLuego(3000).then(mensaje => console.log(mensaje)); // tiempo de espera de 3 segundos / muestra "Hola" después de 3 segundos

// async/await
(async () => {
  const msg = await holaLuego(300);
  console.log("await:", msg);
})();

//2) Validación con error

const getUsuario = (id) => new Promise((resolve, reject) => {
  setTimeout(() => id <= 0 ? reject(new Error("ID inválido"))
                           : resolve({ id, nombre: "Ana" }), 200);
});

//then
getUsuario(1)
  .then(usuario => console.log("Usuario:", usuario))
  .catch(err => console.error("Error:", err.message));

  //try/catch con async/await
  (async () => {
  try {
    const u = await getUsuario(1);
    console.log("OK:", u);
    await getUsuario(2); // lanza
  } catch (e) {
    console.log("Error:", e.message);
  }
})();

//3) Encadenamiento simple

// then
getUsuario(1)
  .then(u => ({ ...u, rol: "admin" }))
  .then(u2 => ({ ...u2, activo: true }))
  .then(final => console.log("then:", final))
  .catch(console.error);

// async/await

