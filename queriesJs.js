$(window).resize(function(){

       if ($(window).width() <= 480 ){

         $("#anal").click(function(){
           $("#anal").css({"width":"90%"});
           $("#inv, #for, #tal, #pla, #ava").css({"width":"100%"});
         });

       }

});
