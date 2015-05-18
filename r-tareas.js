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


  nnn = $('.list .item ').eq(random).text();
  pen.innerText = nnn;



  // var q = $("li:empty").hiden;
 // elije = $('.list .item ').eq(random).hide();

// elim = $('.list .item ').eq(random);

}
    
// var lista = $('.item').text();
//   pending.innerText = lista;  

	
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
       // $('.list .item ').eq(random).hide();
       $('.item').text();
       pending.innerText = $('.item').text()

      


    } else {
        seconds--;
    }


};
 
function runTimer() {
  $('.list .item ').eq(random).remove();

	countdownTimer = setInterval('secondPassed()', 1000);
	return false ;
}
// function clonTimer() {
//   $('.list .item ').eq(random).show();

// }

 

     
//     $('.start-random').click(function() {
//         randomScript();
//         runTimer();
    
// });

 $('.start-random').click(randomScript);
 $('.start-timer').click(runTimer);

 

