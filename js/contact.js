function sendTelegram() {
	token = 'ABCD:1234567890';
	chat_id = '1234567890';
	name = (document.getElementById("name").value).toString();
	user = (document.getElementById("usuario").value).toString();
	assu = (document.getElementById("assunto").value).toString();
	text = (document.getElementById("texto").value).toString();
	msg = 'Via: Site\nName: ' + name + '\nUser: ' + user + '\nTexto: ' + text + '\n';
	var url = 'https://api.telegram.org/bot' + token + '/';
	url += 'sendMessage';
	url += '?chat_id=' + encodeURIComponent(chat_id);
	url += '&text=' + encodeURIComponent(msg);
	document.getElementById("textSending").innerText = "Enviando a sua mensagem!";
	$.getJSON(url, function(v) {
		if (v['ok'] == true) {
			document.getElementById("textSending").innerText = "Mensagem enviada com sucesso!";
			document.getElementById("assunto").value = "";
			document.getElementById("texto").value = "";
		} else {
			document.getElementById("textSending").innerText = "Falha ao enviar mensagem";
		}
	});
	return false;
}