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

	/*var generarAleatorios = function(array){
		return Math.floor(Math.random()*array.length);
	};*/

	var indice;
	var indices= [];
	var contClick=0;
	var mostrarFotos = function(sede, contenedor, array){
		var generarAleatorios = function(array){
			if(indices.length<array.length){
			 	var numAleatorio = Math.floor(Math.random()*array.length);
			 	if(indices.indexOf(numAleatorio)==-1){
			 		indices.push(numAleatorio);
			 		console.log(numAleatorio,indices);
			 		return numAleatorio;
			 	}		
			}else{
				alert("no hay mas fotos");
			}

		}

		indice = generarAleatorios(array);

		contenedorImg.attr("src","assets/img/"+sede+"/"+array[indice].image);

		var puntaje = $("#puntaje");
		var error = 0;

		$("form").submit(function(e){
			contClick++;
			e.preventDefault();
			var nombre = $("input:text");
			
			if(nombre.val().toLowerCase() === array[indice].name.toLowerCase()){
				contClick=0;
				nombre.val("");
				puntaje.text(eval(puntaje.text())+5);
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
					nombre.val("");

					indice = generarAleatorios(array);													
						setTimeout(function(){
							contenedorImg.attr("src","assets/img/"+sede+"/"+array[indice].image);
						},3000);					
					
					puntaje.text(eval(puntaje.text())-1);;
				}
				$(".mensaje").text("Sigue Intentando");				
			}

		});

	};

	var contenedorImg = $("img");
	
	$("select").on("change", function(){
		sede = $(this).val();
		$(this).parent().next().show();
	
		if(sede === "peru"){
			mostrarFotos(sede, contenedorImg, peru);
		}else{
			mostrarFotos(sede, contenedorImg, mexico);
		}
	});
	
	
});
