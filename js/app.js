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

	
	//console.log(valor)
	//borraDulces();

	//console.log()


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
			for(var j = 1; j <= 6; j++){

				var valor = $("#fila-"+ h + "colum-"+ j).attr("src")
				var val2 = $("#fila-"+ h +"colum-" + (j + 1)).attr("src")
				var val3 = $("#fila-"+ (h + 1) + "colum-"+ j).attr("src")
				
				/*if(((h - 1) < 0 ) && ((j - 1) < 0)){
					
						h = 0;
						j = 0;*/
								
				var val1 = $("#fila-"+ (h - 1) + "colum-"+ j).attr("src")				
				var val4 = $("#fila-"+ h +"colum-" + (j - 1)).attr("src")

				console.log("...")
				console.log("val1: ", val1,  (h-1), j);
				console.log("Valor: ", valor, h, j);
				console.log("val3: ", val3,  (h+1), j);
				console.log("...")
				console.log("val2: ", val2,  h, (j+1));
				console.log("Valor: ", valor, h, j);
				console.log("val4: ", val4, h, (j-1));
				//}
			}
		}
	}	

	// Para validar y borrar filas y columnas de 3
	function borraDulces(){
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
				}

				if((val1 == valor) && (valor == val3)){

			 		//console.log("hay filas de 3")
			 		$("#fila-"+ (f - 1) + "colum-"+ g).remove();
			 		$("#fila-"+ f + "colum-"+ g ).remove();
			 		$("#fila-"+ (f + 1) + "colum-"+ g).remove();
				}else{  
			 		console.log("no hay coincidencias")
				}

				if((val2 == valor) && (valor == val4)){

					$("#fila-"+ f + "colum-"+ (g - 1)).remove();
			 		$("#fila-"+ f + "colum-"+ g ).remove();
			 		$("#fila-"+ f + "colum-"+ (g + 1)).remove();	
				}else{  
			 		console.log("no hay coincidencias")
			 	}
			}				
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