$(document).ready(function(){

	var arrayDulces = new Array(6),
		i = 0;

	//Animación titulo
	while(i < 9000 ){
		
		$(".main-titulo").animate({color:"blue"}, 1000);		
		$(".main-titulo").animate({color:"yellow"}, 1000);
		i++;		
	}//---

	// Creación matriz y asignar valor a cada elemento 
	for(var a = 0; a < 6; a++){
		arrayDulces[a] = new Array(7); // Nombre
	}
	
	for (var b = 0; b < 6 ; b++) {
		for (var c = 0; c <= 7; c++) {
			var creacionDulces = $(".col-"+c).prepend("<img src="+ randomRuta() +" style='width:112px'; class='dragdrop'>");

			arrayDulces[b][c] = creacionDulces;
		}
	}
	//console.log(arrayDulces[0][2]);
	//console.log(arrayDulces[3][2]); --
	
	// -- Intercambio de dulces
	$(".dragdrop").draggable({

	 	revert: true,
	 	cursorAt: {top: 56, left: 56}
		}) 

	.droppable({
		accept: ".dragdrop",
    	
		drop: function(event, ui) {		

			var drop = $(this).attr("src");
			var drag = $(ui.draggable).attr("src");		

			//console.log("soltar: ",drop, "arrastrado: " ,drag)
			$(this).attr("src", drag);
			$(ui.draggable).attr("src", drop); 
		}
	}) // --


// -- Intento quitar dulces grupos mayores a 3

for (var f = 0; f < 6 ; f++) {
	for (var g = 0; g <= 7; g++) {
		
		if ((arrayDulces[f][g]) === (arrayDulces[f][g])){
			console.log("hola")
		}else{
			console.log("hola2")
		}
	}
}
	
// -- función para entregar ruta aleatoria dulces
	function randomRuta(){
		var num = (Math.floor(Math.random()*3)+1);
		var ruta = "image/" + num + ".png" ;
		return ruta
	};

});