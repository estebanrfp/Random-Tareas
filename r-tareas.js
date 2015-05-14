$( ".list" ).css( "display", "none" );

var $fila = $('.list').first(),
    $tareas = $('#tarea');



function agregarTarea(){
    $tiempos = $( "#times option:selected" ).text();

     var tareas  = $tareas.val();
         seconds = parseInt($tiempos) * 60;
      var $clone  = $fila.clone();

         $clone.find('.ulu .item')
          .text(tareas);

          $clone.find('.ulus .times-print')
          .text(seconds/60);
        

          $clone.hide();
          $(".section").prepend($clone);
          $clone.fadeIn();



    return false;
}


$('#formulario').on('submit', agregarTarea);

function randomScript() {

 	var random = Math.floor(Math.random() * $('.list:nth-child(n+2)').length); $('.list').hide().eq(random).show(); 
}


// pesoEnMarte = (peso / 9.81) * 3.711;
	
	function secondPassed() {
    // var second = (seconds * 60);
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


 

