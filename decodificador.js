const textArea = document.querySelector(".texto");
const ret = document.querySelector(".retangulo");

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    ret.value = textoEncriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value);
    ret.value = "";
    ret.value = textoDesencriptado;
}


document.getElementById('copiar').addEventListener('click', clipboardCopy);
async function clipboardCopy() {
  let text = document.querySelector(".retangulo").value;
  await navigator.clipboard.writeText(text);
}
