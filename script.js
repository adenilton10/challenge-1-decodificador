const btncopiar = document.querySelector(".btncopiar")
	btncopiar.onclick = copiar;
	function copiar() {
	navigator.clipboard.writeText(campo2.value);
	}

	const criptar = document.querySelector(".encriptar");
	criptar.onclick = btnEncriptar;

	const descript = document.querySelector(".descriptar");
	descript.onclick = btnDescriptar;

	const campo1 = document.querySelector("#text1");

	const campo2 = document.querySelector("#text2");

	function btnDescriptar() {
		const textoDescriptado = descriptar(campo2.value);
		campo2.value = textoDescriptado
	}

	function descriptar(stringDescriptada) {
		let matrisCodigo = [["e", "enter"],["i", "imes"],["a","ai"],["o", "ober"],["u","ufat"]];
		stringDescriptada = stringDescriptada.toLowerCase();

		for(let i= 0; i < matrisCodigo.length; i++){
			if(stringDescriptada.includes(matrisCodigo[i][1])){
			stringDescriptada = stringDescriptada.replaceAll(matrisCodigo[i][1], matrisCodigo[i][0]);
			}
		}
		return stringDescriptada;
	}

	function btnEncriptar() {
			const textoEncripitado = encriptar (campo1.value);
			campo2.value = textoEncripitado
	}

	function encriptar(stringEncriptada) {
		let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
		stringEncriptada = stringEncriptada.toLowerCase();

		for(let i = 0; i < matrizCodigo.length; i++) {
			if(stringEncriptada.includes(matrizCodigo[i][0])) {
			stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
			}
		}
		return stringEncriptada;
	}
