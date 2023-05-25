function changeColor(newColor){
var elem = document.getElementById('back');
  elem.style.background = newColor;
}

//changeColor('#'+Math.random().toString(16).substr(-6));
setInterval(function() {
  changeColor('#'+Math.random().toString(16).substr(-6));
  }, 3000);
