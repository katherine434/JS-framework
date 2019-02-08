$(document).ready(function(){
	var arrayDulces = new Array(7);
	var i = 0;	

	//Animación titulo
	while(i < 9000 ){
		
		$(".main-titulo").animate({color:"blue"}, 1000);		
		$(".main-titulo").animate({color:"yellow"}, 1000);
		i++;		
	}

	

	for(var a = 0; a< 7; a++){
		arrayDulces[a] = new Array(7);
	}

	for (var b = 1; b < 7 ; b++) {
		for (var c = 1; c <= 7 ; c++) {
			var creacionDulces = $(".col-"+c).append("<img src="+ randomRuta() +" style='width:112px;' class='var' >");
			arrayDulces[b][c] = creacionDulces;
		}
	}
	

	 $(".var").draggable({

	 	revert: true,
	 	cursorAt: {top: 56, left: 56}

	 });
	

	// Dulces down
	function randomRuta(){
		var num = (Math.floor(Math.random()*3)+1);
		var ruta = "image/" + num + ".png" ;
		return ruta;
	};

});