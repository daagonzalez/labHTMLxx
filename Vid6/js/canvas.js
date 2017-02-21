function iniciar() {
	var elemento=document.getElementById('lienzo'); //Var local
	lienzo=elemento.getContext('2d'); //Var global
}
window.addEventListener("load",iniciar,false);