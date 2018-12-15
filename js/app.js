	
var arrayDulces = new Array(7);

$(document).ready(function(){


	//Animación titulo


	var i = 0;
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
			
			arrayDulces[b][c] = $(".col-"+c).append("<img src="+ randomRuta() +" style='width:112px;' class='var' >");

		}
	}

	// Dulces down
	function randomRuta(){
		var num = (Math.floor(Math.random()*3)+1);
		var ruta = "image/" + num + ".png" ;
		return ruta;
	};

});