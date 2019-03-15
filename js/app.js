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

			var creacionDulces = $(".col-"+c).prepend("<img src="+ randomRuta()+" style='width:112px'; class='dragdrop'; id ='fila-"+ b +"colum-"+ c +"'>");

			arrayDulces[b][c] = creacionDulces;			
		}
	}
	//console.log(arrayDulces[0][2]);
	//console.log(arrayDulces[3][2]); --

	//var variable =  $("#fila-3colum-3").attr("src");
	//console.log(variable)
	// -- Intento quitar dulces grupos mayores a 3


	for (var f = 0; f < 6 ; f++) {
		for (var g = 0; g <= 7; g++) {			

			var valor = $("#fila-"+ f + "colum-"+ g ).attr("src") 
			var val1 = $("#fila-"+ (f - 1) + "colum-"+ g).attr("src")
			var val2 = $("#fila-"+ f +"colum-" + (g + 1)).attr("src")
			var val3 = $("#fila-"+ (f + 1) + "colum-"+ g).attr("src")
			var val4 = $("#fila-"+ f +"colum-" + (g - 1)).attr("src")

			//console.log(val1, val2, val3, val4)
			if(((f - 1) < 0 ) && ((g - 1) < 0)){
				
				f = 0;
				g = 0;

				//console.log("se convirtio ", val1, val2, val3, val4)
			}else{
				//console.log("no hubo necesidad ", val1, val2, val3, val4)
				if((val1 == valor) && (valor == val3)){

			 		//console.log("hay filas de 3")
			 		$("#fila-"+ (f - 1) + "colum-"+ g).remove();
			 		$("#fila-"+ f + "colum-"+ g ).remove();
			 		$("#fila-"+ (f + 1) + "colum-"+ g).remove();
				}else{  
			 		console.log("no hay coincidencias")
				}

				if((val2 == valor) && (valor == val4)){

					$("#fila-"+ f +"colum-" + (g + 1)).remove();
					$("#fila-"+ f + "colum-"+ g ).remove();
					$("#fila-"+ f +"colum-" + (g - 1)).remove();
			 		
				}else{  
			 		console.log("no hay coincidencias")
			 	}
			}
		}			
	}



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

	
// -- función para entregar ruta aleatoria dulces
	function randomRuta(){
		var num = (Math.floor(Math.random()*3)+1);
		var ruta = "image/" + num + ".png";
		return ruta
	};

});