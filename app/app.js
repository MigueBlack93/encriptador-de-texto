let solamenteCaracteres = "¡Caracter no admitido! Solamente letras minúsculas y sin acentos.";
let vocales = ["a", "e", "i", "o", "u"];
let reemplazo = ["ai", "enter", "imes", "ober", "ufat"];
let texto_Encriptado = "";
//let caracteresPermitidos = ['Enter', 'Shift', 'Backspace', 'ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft', 'Tab', 'Control', ' Alt', 'Delete'];

/*
let caracteresNoAdmitidos = [];
let sumatoriaCaracteresNoAdmitidos = 0;

function cargarCaracteresNoAdmitidos(desde, hasta){
    for(i=desde;i<=hasta;i++){
        caracteresNoAdmitidos[sumatoriaCaracteresNoAdmitidos] = String.fromCharCode(i);
        sumatoriaCaracteresNoAdmitidos++;
        console.log (caracteresNoAdmitidos);
    }
}

cargarCaracteresNoAdmitidos(33, 43);
cargarCaracteresNoAdmitidos(45, 45);
cargarCaracteresNoAdmitidos(47, 96);
cargarCaracteresNoAdmitidos(123,255);
*/

let caracter = document.getElementById('main-ingreso-textarea');
caracter.addEventListener('keydown', function(event) {

    let evento = event.key.charCodeAt(0);
    let carac = event.key;

        // Aquí puedes manejar la lógica para la tecla presionada
        console.log('Tecla presionada:', event);
        // Transforma la tecla en su código ASCII
        console.log('Código ASCII:', evento);

    if((evento > 33 && evento < 45 || evento == 45 || evento > 47 && evento < 96 || evento > 123) && carac !== 'Enter' && carac !== 'Shift' && carac !== 'Backspace' && carac !== 'ArrowUp' && carac !== 'ArrowRight' && carac !== 'ArrowDown' && carac !== 'ArrowLeft' && carac !== 'Tab' && carac !== 'Control' && carac !== ' Alt'&& carac !== 'Delete'){
        alert(solamenteCaracteres);
        event.preventDefault();
        return;
    }
    else{
        return 0;
    }
});

function clearMuneco(){
    document.getElementById('main-devolucion-muneco').setAttribute('hidden', '');
    document.getElementById('main-button-encriptar').removeAttribute('disabled');
    document.getElementById('main-button-desencriptar').removeAttribute('disabled');
}


function encriptar(){
    let encriptado = document.getElementById("main-ingreso-textarea").value.split("",undefined);

    for ( i = 0 ; i < encriptado.length ; i++ ){
        
        texto_Encriptado = texto_Encriptado + encripto(encriptado[i]);

    }

    imprimir(texto_Encriptado);

}

function encripto (vocal){
    if (vocal === "a"){
        return "ai";
    }
    if (vocal === "e"){
        return "enter";
    }
    if (vocal === "i"){
        return "imes";
    }
    if (vocal === "o"){
        return "ober";
    }
    if (vocal === "u"){
        return "ufat";
    }
    else{
        return vocal;
    }
}

function desencriptar(){
    let desencriptado = reemplazoTexto(reemplazo, vocales);

    console.log(desencriptado);
    imprimir(desencriptado);
}

function reemplazoTexto(buscar, reemplazar){
    let texto = document.getElementById('main-ingreso-textarea').value;

    for( i=0 ; i < vocales.length ; i++){
        texto = texto.replaceAll(buscar[i], reemplazar[i]);
    }

    return texto;
}

function imprimir(texto){
    clearMuneco();
    document.getElementById('main-devolucion-encripto').removeAttribute('hidden');

    let print = document.getElementById('main-devolucion-textarea');

    print.innerHTML = texto;
}

function copiar(){
    let copiarTexto = document.getElementById('main-devolucion-textarea').value;

    navigator.clipboard.writeText(copiarTexto);
}