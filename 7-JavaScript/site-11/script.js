const tarefa = document.getElementById("input-tarefa")
const btn = document.getElementById("btn-adicionar")
const lista = document.getElementById("lista-tarefas")

btn.addEventListener('click', function(){

    if (tarefa.value != "") {
        const novoitem = document.createElement('li');
        novoitem.textContent = tarefa.value

        lista.appendChild(novoitem);

        tarefa.value = "";
        tarefa.focus();
    }
})