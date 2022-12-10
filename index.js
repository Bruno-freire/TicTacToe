const teste = document.querySelectorAll(".content")
teste.forEach(function(ev){
  ev.addEventListener('click', function(){
    ev.classList.toggle('content')
  })
})