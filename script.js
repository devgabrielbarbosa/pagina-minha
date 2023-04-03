function getValue(){

    let value = document.getElementById("nome").value;
    if(value.length == 0){
        document.getElementById("resultado").innerHTML = `digite um nome válido`;
    }else {
        document.getElementById("resultado").innerHTML = `OLá! ${value} bem vindo(a)! ao curso de desenvolvimento Web da Alura`;
    }
}

function remuveValue(){
    document.getElementById("nome").value = "";
    document.getElementById("resultado").innerHTML = "";
}
