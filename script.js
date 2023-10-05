function verificarSenha() {
    var senha = document.getElementById("senha").value;

    if (senha.length >= 8 && senha.length <= 10) {
        alert("Senha válida!");
    } else {
        alert("A senha precisa ter entre 8 a 10 caracteres.");
    }
}


document.addEventListener("DOMContentLoaded", function () {
    
    document.getElementById("meuFormulario").addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("Evento submit acionado");
        verificarSenha();
    });
});

function exibirRespostas() {
   
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let email = document.getElementById("email").value;
    let genero = document.querySelector('input[name="genero"]:checked').value;
    let mensagem = document.getElementById("mensagem").value;
  
    
    let respostas = "Nome: " + nome + "<br>";
    respostas += "Idade: " + idade + "<br>";
    respostas += "Email: " + email + "<br>";
    respostas += "Gênero: " + genero + "<br>";
    respostas += "Mensagem: " + mensagem + "<br>";
  
    
    let novaPagina = window.open("", "_blank");
    novaPagina.document.write("<h1>Respostas do Formulário</h1>");
    novaPagina.document.write(respostas);
  }


