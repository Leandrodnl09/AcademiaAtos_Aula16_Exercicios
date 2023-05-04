function mostrarMensagem() {
	var nome = document.getElementById("name").value;
	var idade = parseInt(document.getElementById("age").value);

	var mensagem = "Seu nome é " + nome + " e você tem " + idade + " anos.";

	if (idade >= 18) {
		mensagem += " Você é maior de idade.";
	} else {
		mensagem += " Você é menor de idade.";
	}

	alert(mensagem);

	if (idade % 2 === 0) {
		document.getElementById("myButton").classList.remove("green-button");
		document.getElementById("myButton").classList.add("blue-button");
	} else {
		document.getElementById("myButton").classList.remove("blue-button");
		document.getElementById("myButton").classList.add("green-button");
	}
}