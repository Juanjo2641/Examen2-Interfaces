// nombre_del_alumno
//Juan José Aragón Egea
// Completar JS aqui

const enviar = document.getElementById("enviar");
const exter2 = document.getElementById("exter2");
const exter = document.getElementById("exter");
const atras = document.getElementById("atras");
const reset = document.getElementById("reset");

enviar.addEventListener("click", function () {
  exter.style.display = "none";
  exter2.style.display = "block";
});

atras.addEventListener("click", function () {
  exter2.style.display = "none";
  exter.style.display = "block";
});

añadir.addEventListener("click", function () {
  alert("Añadido Correctamente");
});