$(document).ready(function(){

	/// Variables
	var arrayDulces;
	var seMovio = 0;

	//Animación titulo
	var i = 0;
	while(i < 9000 ){
		
		$(".main-titulo").animate({color:"blue"}, 1000);		
		$(".main-titulo").animate({color:"yellow"}, 1000);
		i++;		
	}//---


	creaDulces();
	pintarDulces();
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
			var idIni = $(this).attr("id");
			var drag = $(ui.draggable).attr("src");		
			var idFin = $(ui.draggable).attr("id");

			let fini = idIni.substr(5,1);
			let cini = idIni.substr(12,1);
			let ffin = idFin.substr(5,1);
			let cfin = idFin.substr(12,1);


			//console.log("soltar: ",drop, "arrastrado: " ,drag)
			console.log("soltar:<" + drop + "> arrastrado:<" + drag + ">");
			console.log("soltar:<" + idIni + "> arrastrado:<" + idFin + ">");
			console.log("soltar:<" + fini + "," + cini + "> arrastrado:<" + ffin + "," + cfin + ">");
			$(this).attr("src", drag);
			$(ui.draggable).attr("src", drop); 
			// Ahora actualizo el array
			arrayDulces[fini][cini] = drag;
			arrayDulces[ffin][cfin] = drop;
			seMovio = seMovio + 1;
			validador();
		}
	}) // --

	function validador(){

		console.log("----------------------------------------------------")
		console.log("Estoy validando con " + seMovio + " movimientos");
		let cantMatch = 0;

		for(var f = 1; f < 5 ; f++){
			for(var c = 0; c < 7; c++){
				let cv = arrayDulces[f][c] ;
				let ca = arrayDulces[f - 1][c];
				let cs = arrayDulces[f + 1][c];
				if( (cv === ca) && (cv === cs) ){
					cantMatch = cantMatch + 1;
					console.log("Hago match por columnas en [" + (f + 1) + "][" + (c + 1) + "]");
					console.log("CA:" + ca + ";CV:" + cv + ";CS:" + cs);
				}
			}
		}

		for(var c = 1; c < 6 ; c++){
			for(var f = 0; f < 6; f++){
				let cv = arrayDulces[f][c] ;
				let ca = arrayDulces[f][c - 1];
				let cs = arrayDulces[f][c + 1];
				if( (cv === ca) && (cv === cs) ){
					cantMatch = cantMatch + 1;
					console.log("Hago match por filas en [" + (f + 1) + "][" + (c + 1) + "]");
					console.log("CA:" + ca + ";CV:" + cv + ";CS:" + cs);
				}
			}
		}

		console.log("Se encontraron " + cantMatch + " matches");

		/*for (var h = 1; h < 5; h++){
			for(var j = 1; j < 7; j++){ //Columna

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
		}*/
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

		arrayDulces = new Array(6);

		// Creación matriz y asignar valor a cada elemento 
		for(var a = 0; a < 6; a++){
			arrayDulces[a] = new Array(7); 
		}

		for (var b = 0; b < 6 ; b++) {
			for (var c = 0; c < 7; c++) {

				let strDulce = randomRuta();

				//let strCreacionDulce = "<img src="+ randomRuta()+" style='width:112px'; class='dragdrop'; id ='fila-"+ b +"colum-"+ c +"'>";
				//let strCreacionDulce = "<img src='"+ strDulce +"' style='width:112px'; class='dragdrop'; id ='fila-"+ b +"colum-"+ c +"'>";

				//var creacionDulces = $(".col-"+c).prepend("<img src="+ randomRuta()+" style='width:112px'; class='dragdrop'; id ='fila-"+ b +"colum-"+ c +"'>");
				//var creacionDulces = $(".col-"+(c+1)).prepend(strCreacionDulce);

				arrayDulces[b][c] = strDulce;		
			}
		}

		/*console.log("Validando creacion de dulces\n");

		for (var b = 0; b < 6 ; b++) {
			for (var c = 1; c <= 7; c++) {
				console.log(  arrayDulces[b][c] + "\n");
			}
		}*/
	}

	// Funcion para generar las imagenes
	function pintarDulces(){
		for (var b = 0; b < 6 ; b++) {
			for (var c = 0; c < 7; c++) {
				
				let strCreacionDulce = "<img src='"+ arrayDulces[b][c] +"' style='width:112px'; class='dragdrop'; id ='fila-"+ b +"colum-"+ c +"'>";
				$(".col-"+(c+1)).prepend(strCreacionDulce);

			}
		}
	}
		
	

	// -- Función para entregar ruta aleatoria dulces
	function randomRuta(){
		var num = (Math.floor(Math.random()*3)+1);
		var ruta = "image/" + num + ".png";
		return ruta
	};

})
;