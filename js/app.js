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
			var creacionDulces = $(".col-"+c).prepend("<img src="+ randomRuta() +" style='width:112px'; class='dragdrop'>");
		}
	}
	

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
	})

	

	// Dulces down
	function randomRuta(){
		var num = (Math.floor(Math.random()*3)+1);
		var ruta = "image/" + num + ".png" ;
		return ruta
	};

});