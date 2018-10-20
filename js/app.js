$(document).ready(function(){

	//Animación titulo
	var i = 0;
	while(i < 9000 ){
		
		$(".main-titulo").animate({color:"blue"}, 1000);		
		$(".main-titulo").animate({color:"yellow"}, 1000);
		i++;		
	}


	// Dulces down
	function randomRuta(){
		var num = (Math.floor(Math.random()*3)+1);
		var ruta = "image/" + num + ".png";
		return ruta;
	};


	var a = 0;
	while(a<6){

		$(".col-1").prepend("<img src="+ randomRuta() +" style='width:112px;'>");
		$(".col-2").prepend("<img src="+ randomRuta() +" style='width:112px;'>");
		$(".col-3").prepend("<img src="+ randomRuta() +" style='width:112px;'>");
		$(".col-4").prepend("<img src="+ randomRuta() +" style='width:112px;'>");
		$(".col-5").prepend("<img src="+ randomRuta() +" style='width:112px;'>");
		$(".col-6").prepend("<img src="+ randomRuta() +" style='width:112px;'>");
		$(".col-7").prepend("<img src="+ randomRuta() +" style='width:112px;'>");

		a++;
	}

	/*function gravedad(){

		var a = $(".col-1").prepend("<img src="+ randomRuta() +" style='width:112px;' class='var'>");

		$()

		return a;
	}

	gravedad();

	//primera col

	/*$(".col-1").prepend("<img src="+ randomRuta() +" style='width:112px;'>")
	$(".col-1").prepend("<img src="+ randomRuta() +" style='width:112px;'>")
	$(".col-1").prepend("<img src="+ randomRuta() +" style='width:112px;'>")
	$(".col-1").prepend("<img src="+ randomRuta() +" style='width:112px;'>")
	$(".col-1").prepend("<img src="+ randomRuta() +" style='width:112px;'>")
	$(".col-1").prepend("<img src="+ randomRuta() +" style='width:112px;'>")


	//segunda col

	$(".col-2").prepend("<img src="+ randomRuta() +" style='width:112px;'>")
	$(".col-2").prepend("<img src="+ randomRuta() +" style='width:112px;'>")
	$(".col-2").prepend("<img src="+ randomRuta() +" style='width:112px;'>")
	$(".col-2").prepend("<img src="+ randomRuta() +" style='width:112px;'>")
	$(".col-2").prepend("<img src="+ randomRuta() +" style='width:112px;'>")
	$(".col-2").prepend("<img src="+ randomRuta() +" style='width:112px;'>")


	//tercera col

	$(".col-3").prepend("<img src="+ randomRuta() +" style='width:112px;'>")
	$(".col-3").prepend("<img src="+ randomRuta() +" style='width:112px;'>")
	$(".col-3").prepend("<img src="+ randomRuta() +" style='width:112px;'>")
	$(".col-3").prepend("<img src="+ randomRuta() +" style='width:112px;'>")
	$(".col-3").prepend("<img src="+ randomRuta() +" style='width:112px;'>")
	$(".col-3").prepend("<img src="+ randomRuta() +" style='width:112px;'>")


	//cuarta col

	$(".col-4").prepend("<img src="+ randomRuta() +" style='width:112px;'>")
	$(".col-4").prepend("<img src="+ randomRuta() +" style='width:112px;'>")
	$(".col-4").prepend("<img src="+ randomRuta() +" style='width:112px;'>")
	$(".col-4").prepend("<img src="+ randomRuta() +" style='width:112px;'>")
	$(".col-4").prepend("<img src="+ randomRuta() +" style='width:112px;'>")
	$(".col-4").prepend("<img src="+ randomRuta() +" style='width:112px;'>")

	//quinta col

	$(".col-5").prepend("<img src="+ randomRuta() +" style='width:112px;'>")
	$(".col-5").prepend("<img src="+ randomRuta() +" style='width:112px;'>")
	$(".col-5").prepend("<img src="+ randomRuta() +" style='width:112px;'>")
	$(".col-5").prepend("<img src="+ randomRuta() +" style='width:112px;'>")
	$(".col-5").prepend("<img src="+ randomRuta() +" style='width:112px;'>")
	$(".col-5").prepend("<img src="+ randomRuta() +" style='width:112px;'>")

	//sexta col

	$(".col-6").prepend("<img src="+ randomRuta() +" style='width:112px;'>")
	$(".col-6").prepend("<img src="+ randomRuta() +" style='width:112px;'>")
	$(".col-6").prepend("<img src="+ randomRuta() +" style='width:112px;'>")
	$(".col-6").prepend("<img src="+ randomRuta() +" style='width:112px;'>")
	$(".col-6").prepend("<img src="+ randomRuta() +" style='width:112px;'>")
	$(".col-6").prepend("<img src="+ randomRuta() +" style='width:112px;'>")

	//septima col

	$(".col-7").prepend("<img src="+ randomRuta() +" style='width:112px;'>")
	$(".col-7").prepend("<img src="+ randomRuta() +" style='width:112px;'>")
	$(".col-7").prepend("<img src="+ randomRuta() +" style='width:112px;'>")
	$(".col-7").prepend("<img src="+ randomRuta() +" style='width:112px;'>")
	$(".col-7").prepend("<img src="+ randomRuta() +" style='width:112px;'>")
	$(".col-7").prepend("<img src="+ randomRuta() +" style='width:112px;'>")

*/


});