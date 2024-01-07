function crida(msg) {
  if (typeof msg !== "string") {
    throw Error("Hola, soc el primer error");
  }

  try {
    console.log(msg.toUpperCase().repeat(3));
  } catch (e) {
    console.log(e);
  }
}

crida(589);
