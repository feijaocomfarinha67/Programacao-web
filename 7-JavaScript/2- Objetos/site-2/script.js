const jogador = {
    nome: "orelhini helicopterini",
    nivel: 1,

    subirDeNivel(){
        this.nivel++
        nivelJogador.textContent = this.nivel
        nome.textContent = this.nome

    }
}

const nivelJogador = document.getElementById("valor-nivel");
const btn = document.getElementById("btn-xp")
const nome = document.getElementById("nome-tela")

btn.addEventListener('click', function (){
    jogador.subirDeNivel()

})