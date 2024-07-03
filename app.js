let texto_a_Encriptar = [];
let texto_Encriptado = [];
let texto_a_Desencriptar = [];
let texto_Desencriptado = [];
let caracteresNoAdmitidos = [];
let sumatoriaCaracteresNoAdmitidos = 0;
let solamenteCaracteres = "¡Caracter no admitido! Solamente letras minúsculas y sin acentos.";

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
}

function cargarCaracteresNoAdmitidos(desde, hasta){
    for(i=desde;i<=hasta;i++){
        caracteresNoAdmitidos[sumatoriaCaracteresNoAdmitidos] = String.fromCharCode(i);
        sumatoriaCaracteresNoAdmitidos++;
    }
}

cargarCaracteresNoAdmitidos(33, 43);
cargarCaracteresNoAdmitidos(45, 45);
cargarCaracteresNoAdmitidos(47, 96);
cargarCaracteresNoAdmitidos(123,255);

function caracterNoAdmitido(caracter){
    for(i=0;i<caracteresNoAdmitidos.length;i++){
        if(caracter.key==caracteresNoAdmitidos[0]){
            alert(solamenteCaracteres);
        }
        else{
            return caracter;
        }
    }
}

function encriptar (){
    let texto_a_Encriptar = document.getElementById("main__ingreso__textarea").value.split("",undefined);
    let texto_Encriptado = [];

    for (contador=0;contador<texto_a_Encriptar.length;contador++){
        if (texto_a_Encriptar[contador]==="a"){
            texto_Encriptado[contador] = "ai";
        }
        else {
            texto_Encriptado[contador] = texto_a_Encriptar[contador];
        }
        console.log(texto_Encriptado[contador]);
    }

}

console.log(texto_Encriptado);