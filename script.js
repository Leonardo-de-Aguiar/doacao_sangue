document.getElementById("formulario_sangue").addEventListener("submit", function (e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let idade = document.getElementById("idade").value;
    let cidade = document.getElementById("cidade").value;
    let peso = document.getElementById("peso").value;
    let estado = document.getElementById("estado").value;
    let tipo_sanguineo = document.getElementById("tipo_sanguineo").value;


    if((nome.length < 3) && (!nome.includes (""))) return alert("Nome Inválido");
    if((!email.includes ("@")) && (!email.includes("."))) return alert("Email Inválido");
    if(telefone.length < 8) return alert("Telefone Inválido");
    if(idade < 16) return alert("Idade Inválida");
    if(cidade == ("")) return alert("Cidade Inválida");
    if(peso < 50) return alert("Peso Inválido");
    if(estado == ("")) return alert("Estado inválido");
    if(!tipo_sanguineo) return alert("Selecione um tipo sanguíneo")

   

    document.getElementById("finalizar_cadastro").innerHTML = "Cadastro realizado com sucesso!<br>" + "Nome: " + nome;
});