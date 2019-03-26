$(document).ready(function(){

	//Animación titulo
	var i = 0;
	while(i < 9000 ){
		
		$(".main-titulo").animate({color:"blue"}, 1000);		
		$(".main-titulo").animate({color:"yellow"}, 1000);
		i++;		
	}//---


	creaDulces();
	validador();

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

	function validador(){

		for (var h = 1; h < 5; h++){
			for(var j = 1; j < 8; j++){ //Columna

				var valor = $("#fila-"+ h + "colum-"+ j).attr("src")
				
				var val1 = $("#fila-"+ (h - 1) + "colum-"+ j).attr("src")
				var val3 = $("#fila-"+ (h + 1) + "colum-"+ j).attr("src")
				
				if ((val1 == valor) && (valor == val3)){
					//console.log("Igualdad de 3 columnas")

					$("#fila-"+ (h - 1) + "colum-"+ j).remove();
			 		$("#fila-"+ h + "colum-"+ j ).remove();
			 		$("#fila-"+ (h + 1) + "colum-"+ j).remove();
				}
			}
		}

		for(h = 0; h < 6; h++){
			for(j = 2; j <= 6; j++){ //Filas

				var valor = $("#fila-"+ h + "colum-"+ j).attr("src")

				var val2 = $("#fila-"+ h + "colum-"+ (j + 1)).attr("src")
				var val4 = $("#fila-"+ h + "colum-"+ (j - 1)).attr("src")

				if((val2 == valor) && (valor == val4)){
					//console.log("Igualdad de 3 filas")

					$("#fila-"+ h + "colum-"+ (j - 1)).remove();
			 		$("#fila-"+ h + "colum-"+ j ).remove();
			 		$("#fila-"+ h + "colum-"+ (j + 1)).remove();
				}
			}
		}
	}	

	// Para validar y borrar filas y columnas de 3
	function borraDulces(){

				if((val1 == valor) && (valor == val3)){

			 		//console.log("hay filas de 3")
			 		
				}else{  
			 		console.log("no hay coincidencias")
				}

				if((val2 == valor) && (valor == val4)){

						
				}else{  
			 		console.log("no hay coincidencias")
			 	}
							
		
	}

	// Creación de la matriz de dulces
	function creaDulces(){

		var arrayDulces = new Array(6);
		

		// Creación matriz y asignar valor a cada elemento 
		for(var a = 0; a < 6; a++){
			arrayDulces[a] = new Array(7); 
		}
	
		
		for (var b = 0; b < 6 ; b++) {
			for (var c = 1; c <= 7; c++) {
	
				var creacionDulces = $(".col-"+c).prepend("<img src="+ randomRuta()+" style='width:112px'; class='dragdrop'; id ='fila-"+ b +"colum-"+ c +"'>");
	
				arrayDulces[b][c] = creacionDulces;		
			}
		}
	}
		
	

	// -- Función para entregar ruta aleatoria dulces
	function randomRuta(){
		var num = (Math.floor(Math.random()*3)+1);
		var ruta = "image/" + num + ".png";
		return ruta
	};

});