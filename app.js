let texto_Encriptado = [];
let texto_Desencriptado = [];
let solamenteCaracteres = "¡Caracter no admitido! Solamente letras minúsculas y sin acentos.";

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

    if((evento > 33 && evento < 45 || evento == 45 || evento > 47 && evento < 96 || evento > 123) && carac !== 'Enter' && carac !== 'Shift' && carac !== 'Backspace' && carac !== 'ArrowUp' && carac !== 'ArrowRight' && carac !== 'ArrowDown' && carac !== 'ArrowLeft' && carac !== 'Tab'){
        alert(solamenteCaracteres);
        event.preventDefault();
        return;
    }
    else{
        return 0;
    }
});

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

function encriptar(){
    let texto_a_Encriptar = document.getElementById("main-ingreso-textarea").value.split("",undefined);

    for ( i = 0 ; i < texto_a_Encriptar.length ; i++ ){
        
        texto_Encriptado[i] = encripto(texto_a_Encriptar[i]);

    }
    console.log(texto_Encriptado);
    imprimir(texto_Encriptado);
}

function desencriptar(){
    let texto_a_Desencriptar = document.getElementById('main-ingreso-textarea').value;
    let reemplazo = ["ai", "enter", "imes", "ober", "ufat"];
    let separadores = ["a", "e", "i", "o", "u"];

    for( i=0 ; i < separadores.length ; i++){
        texto_a_Desencriptar = texto_a_Desencriptar.replaceAll(reemplazo[i], separadores[i]);
    }
    console.log(texto_a_Desencriptar);
    imprimir(texto_a_Desencriptar);
}

function imprimir(texto){
    document.getElementById('main-devolucion-muneco').setAttribute('hidden', '');
    document.getElementById('main-devolucion-encripto').removeAttribute('hidden');
}