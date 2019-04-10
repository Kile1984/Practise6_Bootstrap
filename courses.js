// pre load
window.addEventListener("load", function(){
  var preLoad = document.getElementsByClassName("preLoad")[0];
  setTimeout(function(){
  preLoad.style.opacity = "0";
  preLoad.style.zIndex = "-1";
  }, 2000)
});