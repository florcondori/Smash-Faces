$(function(){
	var mostrarFotos = function(contenedor,array){
		//creando mis numeros aleatorios
		var indices = [];
		while(indices.length<array.length){
		 	var numAleatorio = Math.floor(Math.random()*array.length);
		 	if(indices.indexOf(numAleatorio)==-1){
		 		indices.push(numAleatorio);
		 	}		
		}
		console.log(indices);
		contenedor.attr("src","assets/img/"+array[indices[0]].img);		
	};

	var filterBySede = function(sede){
		return coders.filter(function(coder){
			return coder.sede == sede;
		});
	};

	var contenedorImg = $("img");

	$("select").on("change", function(){
		var sede = $(this).val();
		console.log(sede);
		var sedeFiltro = filterBySede(sede.toLowerCase());
		console.log(sedeFiltro);
		mostrarFotos(contenedorImg, sedeFiltro);
	});
	

});