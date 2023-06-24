const imagens = document.querySelectorAll(".slide");
const setaVoltar = document.getElementById("seta-voltar");
const setaAvancar = document.getElementById("seta-avancar");

let imagemAtual = 0;
// Para fazer com que a seta da direita avance as imagens
setaAvancar.addEventListener("click", function () {
  if (imagemAtual === imagens.length - 1) {
    return;
  }

  esconderImagemAberta();
  imagemAtual++;
  imagens[imagemAtual].classList.add("mostrar");
  mostrarOuEsconderSetas();
});
// Para fazer com que a seta da esquerda volte as imagens
setaVoltar.addEventListener("click", function () {
  if (imagemAtual === 0) {
    return;
  }

  esconderImagemAberta();
  imagemAtual--;
  imagens[imagemAtual].classList.add("mostrar");
  mostrarOuEsconderSetas();
});

// Função de mostrar atualizar para as proximas imagens
function esconderImagemAberta() {
  const imagemAberta = document.querySelector(".mostrar");
  imagemAberta.classList.remove("mostrar");
}
// função de opacidade na seta da esquerda
function mostrarOuEsconderSetas() {
  const naoEhAPrimeiraImagem = imagemAtual !== 0;
  if (naoEhAPrimeiraImagem) {
    setaVoltar.classList.remove("opacidade");
  } else {
    setaVoltar.classList.add("opacidade");
  }
  // Função de opacidade na seta da direta
  const chegouNaUltimaImagem =
    imagemAtual !== 0 && imagemAtual === imagens.length - 1;
  if (chegouNaUltimaImagem) {
    setaAvancar.classList.add("opacidade");
  } else {
    setaAvancar.classList.remove("opacidade");
  }
}
