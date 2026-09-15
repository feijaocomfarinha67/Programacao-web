const dado = document.getElementById('dado-sensivel');
const alerta = document.getElementById('alerta-seguranca');

dado.addEventListener('copy', function(event){

    event.preventDefault()

    alerta.style.display = 'block'
});

dado.addEventListener('cut', function(event){

    event.preventDefault()

    alerta.style.display = 'block'
});

dado.addEventListener('paste', function(event){

    event.preventDefault()
    
    alerta.style.display = 'block'
});