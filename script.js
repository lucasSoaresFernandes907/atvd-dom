let caixas = document.getElementsByClassName("caixa"); 
caixas[0].addEventListener("click", function() {
    caixas[0].style.backgroundColor = "darkgreen";
});

caixas[1].addEventListener("click", function() {
    caixas[1].style.backgroundColor = "darkgreen";
});
caixas[2].addEventListener("click", function() {
    caixas[2].style.backgroundColor = " darkgreen";
});

let buttonsecundário = document.getElementById("Botão secundário");
buttonsecundário.addEventListener("click", function() {
  caixas[0].style.backgroundColor = "";
  caixas[1].style.backgroundColor = "";
  caixas[2].style.backgroundColor = "";
});
let buttonprincipal = document.getElementById("Botão principal");

buttonprincipal.addEventListener("click", function() {

    caixas[0].style.backgroundColor = "rgb(83, 107, 243";
    caixas[1].style.backgroundColor = " rgb(83, 107, 243";
    caixas[2].style.backgroundColor = " rgb(83, 107, 243";

});