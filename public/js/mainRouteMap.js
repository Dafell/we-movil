$(document).ready(function(){

	// Click en el boton que muestra el mapa
	$(".show-routeMap").click(function(){
		
		$(".routeMap").show(100);
		$(".show-routeMap").hide(100);
		$(".hide-routeMap").show(100);

	});

	// Click en el boton que oculta el mapa
	$(".hide-routeMap").click(function(){
		
		$(".routeMap").hide(100);
		$(".show-routeMap").show(100);
		$(".hide-routeMap").hide(100);

	});

	//$(".routeMap").hide(1000);
});