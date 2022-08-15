var hours=0;
var mintue=0;
var seconds=0;
function mystartFunction(){  
        if(seconds>59){seconds=0;mintue++;}
        if(mintue>59){mintue=0;hours++;}
        if(hours<10){document.getElementById("#hours").text('0'+hours+':');}
        else{document.getElementById("hours").text(hours+':');}
    
    if(mintue<10){                     
        document.getElementById("#mintue").text('0'+mintue+':');}       
        else{document.getElementById("#mintue").text(mintue+':');}    
      if(seconds <10) {
        document.getElementById("#seconds").text('0'+seconds);} 
        else {document.getElementById("#seconds").text(seconds);}
      }


      // Stop Function
function stop() {
  clearInterval(check);
  check = null;
  document.getElementById("#mins,#seconds,#hours").innerHTML = '0';
}



