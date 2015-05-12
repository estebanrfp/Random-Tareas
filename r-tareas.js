$( ".list" ).css( "display", "none" );

var $fila = $('.list').first(),
    $tareas = $('#tarea');



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


$('#formulario').on('submit', agregarTarea);

function randomScript() {

 	var random = Math.floor(Math.random() * $('.list:nth-child(n+2)').length); $('.list').hide().eq(random).show(); 
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
 
function runTimer() {
	var countdownTimer = setInterval('secondPassed()', 1000);
	return false ;
}

     
    $('.start-random').click(function() {
        randomScript();
        runTimer();
    
});


 

