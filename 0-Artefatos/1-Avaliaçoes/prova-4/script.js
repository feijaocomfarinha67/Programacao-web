const visor = document.getElementById("visor")
const btnLiberar = document.getElementById("btn-liberar")
const btnBloquear = document.getElementById("btn-bloquear")

visor.addEventListener("mouseenter", function(){

    visor.textContent = "Aguardando Senha..."
    visor.style.backgroundColor= "orange"

});

visor.addEventListener("mouseleave", function(){

    visor.textContent = "Sistema Ativo"
    visor.style.backgroundColor = "gray"

});

btnLiberar.addEventListener("click", function(){

    visor.textContent = "Acesso Liberado"
    visor.style.backgroundColor = "green"

})

btnBloquear.addEventListener("click", function(){

    visor.textContent = "Acesso Bloqueado!"
    visor.style.backgroundColor = "red"

})