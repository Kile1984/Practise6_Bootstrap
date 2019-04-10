// pre load
window.addEventListener("load", function(){
  var preLoad = document.getElementsByClassName("preLoad")[0];
  setTimeout(function(){
  preLoad.style.opacity = "0";
  preLoad.style.zIndex = "-1";
  }, 2000)
});
// show on scroll
var hidden = document.getElementById("hidden");
var hiddenOffsetTop = hidden.offsetTop/1.2;

window.addEventListener("scroll", function(){
  if( window.pageYOffset > hiddenOffsetTop ){
    hidden.style.transform = "scale(1)";
    hidden.style.opacity = "1";
  };
})
// carousel h1 transform
var carouselH1 = document.getElementById("carouselH1");
window.onload = function(){
  carouselH1.style.transform = "translateX(0)";
}

