let caixas = document.getElementsByClassName("caixa"); 
caixas[0].addEventListener("click", function() {
    caixas[0].style.border = "4px solid darkgreen";
});

caixas[1].addEventListener("click", function() {
    caixas[1].style.border = "4px solid darkgreen";
});
caixas[2].addEventListener("click", function() {
    caixas[2].style.border = "4px solid darkgreen";
});

let buttonsecundário = document.getElementById("Botão secundário");
buttonsecundário.addEventListener("click", function() {
  caixas[0].style.border = "";
  caixas[1].style.border = "";
  caixas[2].style.border = "";
});
let buttonprincipal = document.getElementById("Botão principal");

buttonprincipal.addEventListener("click", function() {

    caixas[0].style.border = "4px solid darkblue";
    caixas[1].style.border = "4px solid darkblue";
    caixas[2].style.border = "4px solid darkblue";

});