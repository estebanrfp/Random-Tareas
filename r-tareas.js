 $( ".pepe" ).css( "display", "none" );



var $fila = $('.pepe').first(),
    $tareas = $('#tarea');
    


// var tareasUsuario;

// tareasUsuario = $('#tarea').val();

function agregarTarea(){
    $tiempos = $( "#times option:selected" ).text();

         var tareas  = $tareas.val(), 
             tiempos = $tiempos,
             $clone  = $fila.clone();

             $clone.find('.ulu .item')
            .text(tareas);

              $clone.find('.ulus .times-print')
            .text(tiempos);
        

    $clone.hide();

    $(".section").prepend($clone);

    $clone.fadeIn();

    return false;
}

		// $clone.hide();
		// $('.ulu').append($clone);		
		// $clone.fadeIn();	

		// pirata.textcontent = $('.item:nth-child(n+2)').show()	



 //        $clone = $('.item').first().clone().text(tarea);

 //          $('.ulu').append($clone);       
 //        $clone.fadeIn();

 //        $clonee = $('.times-print').first().clone().text(tiempos);


 //        // $clone.hide();
 //        $('.ulus').append($clonee);       
 //        $clonee.fadeIn();    

	// return false;

// function showList() {
// 	$('.item:nth-child(n+2)').show()	
// }




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
 	var random = Math.floor(Math.random() * $('.pepe:nth-child(n+2)').length); $('.pepe').hide().eq(random).show();  
 	// $( "ulu.item:nth-child(1)" ).css( "display", "none" );
 	 // pepe.textcontent = $( ".item" ).css( "display", "block" ).show();



}



	var seconds = 1500;
	function secondPassed() {
    var minutes = Math.round((seconds - 30)/60);
    var remainingSeconds = seconds % 60;
    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;  
    }
    document.getElementById('countdown').innerHTML = minutes + ":" + remainingSeconds;
    if (seconds == 0) {
        clearInterval(countdownTimer);
        document.getElementById('countdown').innerHTML = "Buzz Buzz";
    } else {
        seconds--;
    }
}
 
function jota() {
	var countdownTimer = setInterval('secondPassed()', 1000);
	return false ;
}

// var opciones = [$tarea1, $tarea2, $tarea3];
// 	var sale = randoma(0,2);

     
    $('.randoma').click(function() {
        randoma();
        jota();
    
});

     // $(".randoma").click(jota);

 

