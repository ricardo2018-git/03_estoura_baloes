function iniciaJogo(){
	//recupera toda url, comando search exclui tuda url antes do ?
	var url = window.location.search;

	//pega conteudo q sobra da url  e troca ? p/ nada = ""
	//desta forma sobre só o numero q representa o nivel do jogo
	var nivel_jogo = url.replace("?", "");

	var tempo_segundos = 0;

	if(nivel_jogo == 1){	// 1 fácil -> 120s
		tempo_segundos = 120;
	}
	
	if(nivel_jogo == 2){	// 2 normal -> 60s
		tempo_segundos = 60;
	}
	
	if(nivel_jogo == 3){	// 3 difícil -> 30s
		tempo_segundos = 30;
	}

	//inserindo segundos no span
	document.getElementById('cronometro').innerHTML = tempo_segundo;
	
}