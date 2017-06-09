$(function(){

	/*var generarAleatorios = function(array){
		var indices = [];
		while(indices.length<array.length){
		 	var numAleatorio = Math.floor(Math.random()*array.length);
		 	if(indices.indexOf(numAleatorio)==-1){
		 		indices.push(numAleatorio);
		 	}		
		}
		return indices;
	};*/

	var generarAleatorios = function(array){
		return Math.floor(Math.random()*array.length);
	};
	var indice;
	var contClick=0;
	var mostrarFotos = function(sede, contenedor, array){
		indice = generarAleatorios(array);
		contenedorImg.attr("src","assets/img/"+sede+"/"+array[indice].image);
		var puntaje = $("#puntaje");
		var error = 0;

		$("form").submit(function(e){
			contClick++;
			e.preventDefault();
			var nombre = $("input:text");
			
			if(nombre.val().toLowerCase() === array[indice].name.toLowerCase()){
				puntaje.text(eval(puntaje.val()+5));
				$(".mensaje").text("Excelente Acertastes");
				indice = generarAleatorios(array);													
						setTimeout(function(){
							contenedorImg.attr("src","assets/img/"+sede+"/"+array[indice].image);
						},1000);
			}else{
				if(contClick <= 4){
					nombre.val("");
				}else{
					contClick=0;
					indice = generarAleatorios(array);													
						setTimeout(function(){
							contenedorImg.attr("src","assets/img/"+sede+"/"+array[indice].image);
						},3000);					
					
					puntaje.text(eval(puntaje.text()-1));;
				}
				$(".mensaje").text("Sigue Intentando");				
			}
			console.log(puntaje);
		});

	};

	var contenedorImg = $("img");
	
	$("select").on("change", function(){
		sede = $(this).val();
	
		if(sede === "peru"){
			mostrarFotos(sede, contenedorImg, peru);
		}else{
			mostrarFotos(sede, contenedorImg, mexico);
		}
	});
	
	
});


var ran = Math.floor(Math.random()*41);
console.log(ran)
console.log(peru);