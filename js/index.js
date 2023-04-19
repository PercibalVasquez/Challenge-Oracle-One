// Declaración de variables para los elementos del formulario
const msj = document.querySelector('#mensaje'); // Variable para el campo de entrada de texto
const resultado = document.querySelector('#respuesta'); // Variable para el campo de respuesta
// Función para validar el formulario
function validarFormulario() {
  var texto = msj.value; // Obtener el valor del campo de entrada de texto
  var expresionRegular = /^[a-z\s]+$/; // Expresión regular para validar que solo se ingresen caracteres en minúsculas (a-z) y espacios en blanco
  if (!expresionRegular.test(texto)) { // Verificar si el texto ingresado no cumple con la expresión regular
    // Mostrar un mensaje de error con SweetAlert2
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Por favor ingrese solo caracteres en minúsculas (a-z) sin números', // Mensaje de error
      confirmButtonText: 'Aceptar' // Texto del botón de confirmación
    });
    msj.value = ''; // Limpiar el campo de entrada de texto
    resultado.value = ''; // Limpiar el campo de respuesta
    return false; // Retornar falso para evitar la ejecución del formulario
  }
  return true; // Retornar verdadero si el formulario es válido
}
// Función para encriptar el mensaje
function encriptar() {
  if (!validarFormulario()) return; // Validar el formulario antes de continuar
  var mensaje = msj.value; // Obtener el valor del campo de entrada de texto
  var mensajeEncriptado = mensaje
    .replaceAll('e', 'enter') // Reemplazar 'e' con 'enter'
    .replaceAll('i', 'imes') // Reemplazar 'i' con 'imes'
    .replaceAll('a', 'ai') // Reemplazar 'a' con 'ai'
    .replaceAll('o', 'ober') // Reemplazar 'o' con 'ober'
    .replaceAll('u', 'ufat'); // Reemplazar 'u' con 'ufat'
    msj.value="";
    document.getElementById('muñeco').style.display = 'none';
    document.getElementById('ocultar-1').style.display = 'none';
    document.getElementById('ocultar-2').style.display = 'none';
    document.getElementById('btn-copiar').style.display = 'block';
   // document.getElementById('#respuesta').style.display = 'block';
  resultado.value = mensajeEncriptado; // Asignar el mensaje encriptado al campo de respuesta
}

// Obtener el botón para encriptar y asignarle la función encriptar() al evento onclick
const btnEncriptar = document.querySelector('#btn-encriptar');
btnEncriptar.onclick = encriptar;

// Función para desencriptar el mensaje
function desencriptar() {
  if (!validarFormulario()) return;
  var mensaje = msj.value; // Obtener el valor del campo de entrada de texto
  var mensajeDesencriptado = mensaje
    .replaceAll('enter', 'e') // Reemplazar 'enter' con 'e'
    .replaceAll('imes', 'i') // Reemplazar 'imes' con 'i'
    .replaceAll('ai', 'a') // Reemplazar 'ai' con 'a'
    .replaceAll('ober', 'o') // Reemplazar 'ober' con 'o'
    .replaceAll('ufat', 'u'); // Reemplazar 'ufat' con 'u'
  resultado.value = mensajeDesencriptado; // Asignar el mensaje desencriptado al campo de respuesta
  msj.value = ''; // Limpiar el campo de entrada de texto
  document.getElementById('muñeco').style.display = 'none';
  document.getElementById('ocultar-1').style.display = 'none';
  document.getElementById('ocultar-2').style.display = 'none';
  document.getElementById('btn-copiar').style.display = 'block';
}

// Obtener el botón para desencriptar y asignarle la función desencriptar() al evento onclick
const btnDesencriptar = document.querySelector('#btn-desencriptar');
btnDesencriptar.onclick = desencriptar;

// Función para copiar el mensaje encriptado al portapapeles
function copiar() {
  var mensajeEncriptado = resultado.value; // Obtener el valor del campo de respuesta
  navigator.clipboard.writeText(mensajeEncriptado); // Copiar el mensaje encriptado al portapapeles
  document.getElementById('muñeco').style.display = 'block';
  document.getElementById('ocultar-1').style.display = 'block';
  document.getElementById('ocultar-2').style.display = 'block';
  document.getElementById('btn-copiar').style.display = 'none';
  resultado.value = ''; // Limpiar el campo de respuesta
}
// Obtener el botón para copiar y asignarle la función copiar() al evento onclick
const btnCopiar = document.querySelector('#btn-copiar');
btnCopiar.onclick = copiar;
