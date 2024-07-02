let texto_a_Encriptar = [];
let texto_Encriptado = [];
let texto_a_Desencriptar = [];
let texto_Desencriptado = [];

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