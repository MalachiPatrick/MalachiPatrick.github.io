function myFunction(){
var newWindow = window.open("", "_self");
newWindow.document.write("startTimer()")
newWindow.document.write("<form><input type = \"button\" value = \"Hab Lvl 1\" style = \"width: 50%\"><input type = \"button\" value = \"Hab Lvl 2\" style = \"width: 50%\"></form> ")
}
function startTimer(){
  var timer = duration, minutes, seconds;
  setInterval(function(){
    minutes = parseInt(timer / 60,10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if(--timer < 0){
      timer = duration;
    }
  }, 1000);
}