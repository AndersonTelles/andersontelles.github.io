const formulario = document.querySelector("form");

function formularioEnviado(resposta) {
  if (resposta.ok) {
    formulario.innerHTML =
      "<p> Mensagem enviar com Sucesso , Embreve entraremos em contato . Geralmente respondemos em 24hrs</p>";
  } else {
    formulario.innerHTML =
      "<p> Erro no envio , voce pode enviar diretamente para o nosso email em: contato@andersontelles.com.br</p>";
  }
}

function enviarFormualario(event) {
  event.preventDefault();
  const botao = document.querySelector("form button");
  botao.disabled = true;
  botao.innerText = "Enviando...";

  const data = new FormData(formulario);

  fetch("./enviar.php", {
    method: "POST",
    body: data,
  }).then(formularioEnviado);
}

formulario.addEventListener("submit", enviarFormualario);
