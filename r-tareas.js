$( ".list" ).css( "display", "none" );


var $fila = $('.list').first(),
    $tareas = $('#tarea');
    // $pendiente = $('.list');




function agregarTarea(){
    $tiempos = $( "#times option:selected" ).text();

     var tareas  = $tareas.val();
         second = parseInt($tiempos);
     var $clone  = $fila.clone();

         $clone.find('.ulu .item .tarea-print')
          .text(tareas);

          $clone.find('.ulu .item #times-print')
          .text(second);
        

          $clone.hide();
          $(".section").prepend($clone);
         


          $clone.fadeIn();

// function ffff() {
//   $( ".section" ).clone().prependTo( "p" );
// }
//   ffff();


      // document.getElementById('pending').innerHTML = $('.section');



    return false;


}
// function emptyClear() {
  
//     $(".item:empty").css( "display", "none" );

// }


$('#formulario').on('submit', agregarTarea);

function randomScript() {

 	random = Math.floor(Math.random() * $('.list:nth-child(n+2)').length); $('.list').hide().eq(random).show(); 
 
  seconds = (parseInt($('.list #times-print').eq(random).text()))*60;

var lista = $('.item').text();

pending.innerText = lista;
  // var q = $("li:empty").hiden;



}
    



	
	function secondPassed() {
   
     tareaComp = $('.list .item').hide().eq(random).show()
 
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
        tareaComp.css( "display", "none" );


    } else {
        seconds--;
    }


};
 
function runTimer() {
	countdownTimer = setInterval('secondPassed()', 1000);
	return false ;
}

     
//     $('.start-random').click(function() {
//         randomScript();
//         runTimer();
    
// });

 $('.start-random').click(randomScript);
 $('.start-timer').click(runTimer);

 

