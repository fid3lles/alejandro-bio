var text = document.querySelector("p").offsetTop;
console.log(text);

window.onscroll = function() {
  if (window.pageYOffset > 0) {
    var opac = (window.pageYOffset * 2 / text);
    console.log(opac);
    document.body.style.background = "linear-gradient(rgba(17, 19, 21, " + opac + "), rgba(17, 19, 21, " + opac + ")), url(https://cmsassets.rgpub.io/sanity/images/dsfx7636/universe_live/245b4173f2b90cd0e181ea1be4ad876154696a7a-1920x798.jpg) no-repeat";
  }
}