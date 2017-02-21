function iniciar() {
	var elemento=document.getElementById('lienzo'); //Var local
	lienzo=elemento.getContext('2d'); //Var global
	/* Ej2
	//Cuadrado relleno
	lienzo.fillRect(110,110,100,100);
	*/
	
	/* Ej3
	//Borde de un cuadrado
	lienzo.strokeRect(100,100,120,120); 
	*/
	
	/* Ej4 
	//Borrador
	lienzo.strokeRect(100,100,120,120);
	lienzo.fillRect(110,110,100,100);
	lienzo.clearRect(120,120,80,80);
	*/
	
	/*Ej 5 
	//Color a las figuras
	lienzo.fillStyle="#000099";
	//lienzo.strokeStyle="rgba(255,165,0,1)";
	lienzo.strokeStyle="#990000";
	lienzo.globalAlpha=0.5;
	
	lienzo.strokeRect(100,100,120,120);
	lienzo.fillRect(110,110,100,100);
	lienzo.clearRect(120,120,80,80);
	*/
	
	/*Ej 6 
	var gradiente = lienzo.createLinearGradient(0,0,10,100);
	gradiente.addColorStop(0.5,'#0000FF');
	gradiente.addColorStop(1,'#000000');
	
	lienzo.fillStyle=gradiente;
	lienzo.fillRect(10,10,100,100);
	lienzo.fillRect(150,10,200,100);
	*/
	
	/* Ej 7,8,9,10 
	lienzo.beginPath();
		lienzo.moveTo(100,100);
		lienzo.lineTo(200,200);
		lienzo.lineTo(100,200);		
		//lienzo.closePath();
		//lienzo.stroke();
		//lienzo.fill();
		lienzo.clip();
		lienzo.beginPath();
		for(f=0; f<300; f=f+10) {
			lienzo.moveTo(0,f);
			lienzo.lineTo(500,f);
		}
	lienzo.stroke();
	*/
	
	/* Ej 11 
	lienzo.beginPath();
		lienzo.arc(100,100,50,0,Math.PI*2,false);
	lienzo.stroke();
	*/
	
	/* Ej 12 */
	lienzo.beginPath();
		lienzo.moveTo(50,50);
		lienzo.quadraticCurveTo(100,125,50,200);
		lienzo.moveTo(250,50);
		lienzo.bezierCurveTo(200,125,300,125,250,200);
	lienzo.stroke();
	
}
window.addEventListener("load",iniciar,false);