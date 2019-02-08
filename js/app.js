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
			var creacionDulces = $(".col-"+c).prepend("<img src="+ randomRuta() +" style='width:112px;' class='var' >");
		}
	}
	

	 $(".var").draggable({

	 	revert: true,
	 	cursorAt: {top: 56, left: 56}

	 }).mousedown(function(){

	 	var ima1 = $(this).attr("src");

	 	console.log(ima1);

	 }).mouseup(function(){

	 	var ima2 = $(this).attr("src");

	 	//$('.var').attr('src',ima2);

	 	console.log(ima2);

	 });




	

	// Dulces down
	function randomRuta(){
		var num = (Math.floor(Math.random()*3)+1);
		var ruta = "image/" + num + ".png" ;
		return ruta;
	};

});