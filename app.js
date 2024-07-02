let texto_a_Encriptar = [];
let texto_Encriptado = [];
let texto_a_Desencriptar = [];
let texto_Desencriptado = [];
let caracteresAdmitidos = ["a","b","c","d","e","f","g","h","i","j","k","l,","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z",","," ","."]
let solamenteCaracteres = "¡Caracter no admitido! Solamente letras minúsculas y sin acentos.";

function imprimir_En_Derecho(letra){
    
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
}

function caracterNoAdmitido(){


    if(document.getElementById("main__ingreso__textarea").onkeydown==caracteresAdmitidos[1]){
        return;
    }
    else{
        alert(solamenteCaracteres);
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