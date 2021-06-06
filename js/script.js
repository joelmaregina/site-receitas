document.getElementById("button").addEventListener("click", validaFormulario)

function validaFormulario () {
  if (document.getElementById("nome").value != "" && document.getElementById("email").value != ""  && document.getElementById("number").value != ""){
    alert("Pronto! Você será contactado para que me envie a sua sugestão!")
  }else{
    alert("Por favor, preencha os campos de nome, e-mail e número!")
  }
}

