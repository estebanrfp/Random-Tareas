$( ".list" ).css( "display", "none" );


var $fila = $('.list').first(),
    $tareas = $('#tarea');
    // $pendiente = $('.list');



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




      // document.getElementById('pending').innerHTML = $('.section');



    return false;


}
// function emptyClear() {
  
//     $(".item:empty").css( "display", "none" );

// }


$('#formulario').on('submit', agregarTarea);

function randomScript() {

 	var random = Math.floor(Math.random() * $('.list:nth-child(n+2)').length); 
  $('.list').hide().eq(random).show(); 

  // var q = $("li:empty").hiden;



}


	
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
        document.getElementById("alarm").play();
        document.getElementById('countdown').innerHTML = "Fin del tiempo";

    } else {
        seconds--;
    }


};
 
function runTimer() {
	countdownTimer = setInterval('secondPassed()', 1000);
	return false ;
}

     
    $('.start-random').click(function() {
        randomScript();
        runTimer();
    
});


 

