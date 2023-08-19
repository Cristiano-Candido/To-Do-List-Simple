let caixaTexto = document.getElementById("caixaTexto")
let botaoAdicionar = document.getElementById("botaoAdicionar")
let mostrarTela = document.getElementById("mostrarTela")
let botaoApagar = document.getElementById("botaoApagar")

let arrayVazio = [];

botaoAdicionar.addEventListener("click", pegarTexto);

caixaTexto.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {

        pegarTexto();
    }
});

function pegarTexto() {
    let inserirTexto = caixaTexto.value.trim();

    if (inserirTexto !== "") {
        arrayVazio.push(inserirTexto)
        caixaTexto.value = "";
    } else {
        alert("OPERAÇÃO INVÁLIDA, preencha o campo vazio.")
    }
    resultadoNaTela();
};

function resultadoNaTela() {
    mostrarTela.innerHTML = "";

    arrayVazio.forEach(function (itens) {
        let novaLista = document.createElement("li");
        novaLista.innerHTML = itens;
        mostrarTela.appendChild(novaLista)
    });
}

botaoApagar.addEventListener("click", function () {
    arrayVazio = []

    resultadoNaTela()
});