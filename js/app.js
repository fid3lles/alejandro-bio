var text = document.querySelector("p").offsetTop;
console.log(text);

window.onscroll = function() {
  if (window.pageYOffset > 0) {
    var opac = (window.pageYOffset * 2 / text);
    document.body.style.background = "linear-gradient(rgba(17, 19, 24, " + opac + "), rgba(17, 19, 24, " + opac + ")), url(../src/img/alejandro_kukulcan.png) no-repeat";
  }
}

function play(e){
  e.querySelector('audio').play();
}

//rgba(17, 19, 24, 1)