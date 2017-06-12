$(function(){
	var indice;
	var indices= [];
	var contClick=0;

	var generarAleatorios = function(array){
		if(indices.length<array.length){
			while(indices.length<array.length){
			 	var numAleatorio = Math.floor(Math.random()*array.length);
			 	//verificar que el numero aleatorio no haya salido
			 	if(indices.indexOf(numAleatorio)==-1){
			 		indices.push(numAleatorio);
			 		console.log(indices);
			 		return numAleatorio; 
			 	}		
			}	
		}else{
			alert("no hay mas fotos, ganastes el juego");
		}		

	}

	var mostrarFotos = function(sede, contenedor, array){
		//imprimir la primera foto aleatoriamente
		var indice = generarAleatorios(array);
		contenedorImg.attr("src","assets/img/"+sede+"/"+array[indice].image);

		var puntaje = $("#puntaje");
		var mensaje = $(".mensaje");
		
		$("form").submit(function(e){
			contClick++;
			e.preventDefault();
			var nombre = $("input:text");
			//si adivinas el nombre contClick=0; sumas 5 puntos
			if(nombre.val().toLowerCase() === array[indice].name.toLowerCase()){
				contClick=0;
				nombre.val("");
				puntaje.text(eval(puntaje.text())+5);
				mensaje.text(":) Excelente Acertastes");
				//se muestra otra imagen aleatoriamente
				setTimeout(function(){
					indice = generarAleatorios(array);
					contenedorImg.attr("src","assets/img/"+sede+"/"+array[indice].image);
					mensaje.text("");
				},1000);
																	
			}else{
				if(contClick <= 4){
					nombre.val("");
					$(".mensaje").text(":| Sigue Intentando");	
				}else{
					contClick=0;
					nombre.attr("disabled", true);					

					setTimeout(function(){
						indice = generarAleatorios(array);
						contenedorImg.attr("src","assets/img/"+sede+"/"+array[indice].image);
						mensaje.text("");
						nombre.attr("disabled", false);
						nombre.val("");
					},2000);					
					
					puntaje.text(eval(puntaje.text())-1);;
				}
							
			}

		});

	};

	var contenedorImg = $("img");
	
	$("select").on("change", function(){
		sede = $(this).val();
		$(this).parent().next().show();
	
		if(sede === "peru"){
			mostrarFotos(sede, contenedorImg, peru);
			indices= [];
		}else{
			mostrarFotos(sede, contenedorImg, mexico);
			indices= [];
		}
	});
	
});
