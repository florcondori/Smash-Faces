$(function(){
	var indice;
	var indices= [];
	var contClick=0;

	var generarAleatorios = function(array){
		if(indices.length<array.length){
			while(indices.length<array.length){
			 	var numAleatorio = Math.floor(Math.random()*array.length);
			 	if(indices.indexOf(numAleatorio)==-1){
			 		indices.push(numAleatorio);
			 		console.log(indices);
			 		return numAleatorio; 
			 	}		
			}	
		}else{
			alert("no hay mas fotos");
		}		

	}

	var mostrarFotos = function(sede, contenedor, array){
		var indice = generarAleatorios(array);
		contenedorImg.attr("src","assets/img/"+sede+"/"+array[indice].image);

		var puntaje = $("#puntaje");
		var mensaje = $(".mensaje");
		var error = 0;

		$("form").submit(function(e){
			contClick++;
			e.preventDefault();
			var nombre = $("input:text");
			
			if(nombre.val().toLowerCase() === array[indice].name.toLowerCase()){
				contClick=0;
				nombre.val("");
				puntaje.text(eval(puntaje.text())+5);
				mensaje.text("Excelente Acertastes");

				setTimeout(function(){
					indice = generarAleatorios(array);
					contenedorImg.attr("src","assets/img/"+sede+"/"+array[indice].image);
					mensaje.text("");
				},1000);
																	
			}else{
				if(contClick <= 4){
					nombre.val("");
					$(".mensaje").text("Sigue Intentando");	
				}else{
					contClick=0;
					nombre.val("");					

					setTimeout(function(){
						indice = generarAleatorios(array);
						contenedorImg.attr("src","assets/img/"+sede+"/"+array[indice].image);
						mensaje.text("");
					},3000);					
					
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
	
	console.log(mexico.length);
	console.log(peru.length);
});
