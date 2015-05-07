

// var tareasUsuario;

// tareasUsuario = $('#tarea').val();

function agregarTarea(){

	var tarea = $('#tarea').val(),
		$clone = $('.ulu').first().clone();


		$clone.find('.item')
		.text(tarea);

		$clone.hide();
		$('.pepe').append($clone);
		$clone.fadeIn();
	return false;
}


$('#formulario').on('submit', agregarTarea);

// $("#formulario").submit(agregarTarea);

// var  $tarea1 = $('.ulu .item:nth-child(1)'),
//      $tarea2 = $('.ulu .item:nth-child(2)'),
//      $tarea3 = $('.ulu .item:nth-child(3)');



	// var $tarea1 = 0,
	// 	$tarea2 = 1,
	// 	$tarea3 = 2;

function randoma()
{

	  // var numero = Math.floor( Math.random() * (maximo - minimo 
   //  + 1) + minimo );
   //  return numero;
 	var random = Math.floor(Math.random() * $('.item').length); $('.item').hide().eq(random).show();   

}


	

// var opciones = [$tarea1, $tarea2, $tarea3];
// 	var sale = randoma(0,2);

     

     $(".randoma").click (randoma);

 
// $(".randoma").click( randoma );

