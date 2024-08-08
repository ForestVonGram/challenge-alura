// Creación de elementos

const botonEncriptar = document.querySelector(".main__botones__encriptar");
const textoEncriptar = document.querySelector(".main__encriptacion__texto");
const notificacion = document.querySelector(".main__limitaciones__texto");
const resolucion = document.querySelector(".operacion__resultado");
const elementosOperacion = document.querySelector(".operacion__informacion");
const botonCopiar = document.querySelector(".operacion__boton__resultado__copiar");

const botonDesencriptar = document.querySelector(".main__botones__desencriptar");



// Botón para encriptar

botonEncriptar.addEventListener("click", e => {
    e.preventDefault();
    let texto = textoEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

    if (texto == "") {
        notificacion.style.background = "#cc0000";
        notificacion.style.color = "#FFF";
        notificacion.style.fontWeight = "800";
        notificacion.textContent = "Debes escribir algo para empezar.";

        setTimeout(() => {
            notificacion.removeAttribute("style");
        },1500);
    } else if (texto != txt) {
        notificacion.style.background = "#cc0000";
        notificacion.style.color = "#FFF";
        notificacion.style.fontWeight = "800";
        notificacion.textContent = "El texto ingresado no puede contener acentos ni carácteres especiales.";

        setTimeout(() => {
            notificacion.removeAttribute("style");
        },1500);
    } else if (texto != texto.toLowerCase()) {
        notificacion.style.background = "#cc0000";
        notificacion.style.color = "#FFF";
        notificacion.style.fontWeight = "800";
        notificacion.textContent = "El texto ingresado no puede estar en mayúsculas.";

        setTimeout(() => {
            notificacion.removeAttribute("style");
        },1500);
    } else {
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        resolucion.innerHTML = texto;
        botonCopiar.style.visibility = "inherit";
        elementosOperacion.remove();
    }
});



// Botón para desencriptar

botonDesencriptar.addEventListener("click", e => {
    e.preventDefault();
    let texto = textoEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

    if (texto == "") {
        notificacion.style.background = "#cc0000";
        notificacion.style.color = "#FFF";
        notificacion.style.fontWeight = "800";
        notificacion.textContent = "Debes escribir algo para empezar.";

        setTimeout(() => {
            notificacion.removeAttribute("style");
        },1500);
    } else if (texto != txt) {
        notificacion.style.background = "#cc0000";
        notificacion.style.color = "#FFF";
        notificacion.style.fontWeight = "800";
        notificacion.textContent = "El texto ingresado no puede contener acentos ni carácteres especiales.";

        setTimeout(() => {
            notificacion.removeAttribute("style");
        },1500);
    } else if (texto != texto.toLowerCase()) {
        notificacion.style.background = "#cc0000";
        notificacion.style.color = "#FFF";
        notificacion.style.fontWeight = "800";
        notificacion.textContent = "El texto ingresado no puede estar en mayúsculas.";

        setTimeout(() => {
            notificacion.removeAttribute("style");
        },1500);
    } else {
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        resolucion.innerHTML = texto;
        botonCopiar.style.visibility = "inherit";
        elementosOperacion.remove();
    }
});


// Botón para copiar

botonCopiar.addEventListener("click", e => {
    e.preventDefault();
    let copiar = resolucion;
    copiar.select();
    document.execCommand("copy");
    alert("Texto copiado con éxito.");
});