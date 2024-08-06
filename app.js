function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("operacion__mensaje__titulo");
    let parrafo = document.getElementById("operacion__mensaje__texto");

    let textoCifrado = texto
                        .replace(/e/gi, "enter")
                        .replace(/i/gi, "imes")
                        .replace(/a/gi, "ai")
                        .replace(/o/gi, "ober")
                        .replace(/u/gi, "ufat");

    if (document.getElementById("texto").value.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto incriptado con éxito";
        parrafo.textContent = "";
    } else {
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar algún texto.");
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("operacion__mensaje__titulo");
    let parrafo = document.getElementById("operacion__mensaje__texto");
    
    let textoCifrado = texto
                        .replace(/enter/gi, "e")
                        .replace(/imes/gi, "i")
                        .replace(/ai/gi, "a")
                        .replace(/ober/gi, "o")
                        .replace(/ufat/gi, "u");
                        
    if (document.getElementById("texto").value.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
    } else {
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar algún texto.");
    }

}