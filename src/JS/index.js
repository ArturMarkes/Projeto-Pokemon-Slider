/*

    MOSTRAR O PROXIMO CARTÃO DA LISTA
OBJETIVO 1 - Quando clicarmos na seta de avançar temos que mostrar o proximo cartão da lista
        - Passo 1 - dar um jeito de pegar o elemento html da seta avançar
        - passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
        - passo 3 - fazer aparecer o próximo cartão da lista
        - passp 4 - buscar p cartãp que esta selecionado e esconder
    
OBJETIVO 2 - Quando clicarmos na seta de voltar temos que mostrar o cartão anterior da lista
    - passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
    - passo 2 - dar um jeito de identificar o clique do usuário na seta voltar
    - passo 3 - fazer aparecer o prócimo cartão da lista
    - passo 4 - buscar o cartão que esta selecionado e esconder

*/

const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

function esconderCartaoSelecionado() {
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
}

function mostrarCartao(indiceCartao) {
  cartoes[indiceCartao].classList.add("selecionado");
}

btnAvancar.addEventListener("click", function () {
  if (cartaoAtual === cartoes.length - 1) return;

  esconderCartaoSelecionado();

  cartaoAtual++;
  mostrarCartao(cartaoAtual);
});

btnVoltar.addEventListener("click", function () {
  if (cartaoAtual === 0) return;

  esconderCartaoSelecionado();

  cartaoAtual--;
  mostrarCartao(cartaoAtual);
});

  
