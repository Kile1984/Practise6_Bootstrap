// pre load
window.addEventListener("load", function(){
  var preLoad = document.getElementsByClassName("preLoad")[0];
  setTimeout(function(){
  preLoad.style.opacity = "0";
  preLoad.style.zIndex = "-1";
  }, 2000)
});
// rotate Arrows
var arrowBlack = document.getElementById("arrowBlack");
var arrowWhite = document.getElementById("arrowWhite");

arrowBlack.style.transform ="rotate(0deg)";
arrowWhite.style.transform ="rotate(0deg)";

arrowBlack.addEventListener("click", function(){
	if( arrowBlack.style.transform =="rotate(0deg)"){
		arrowBlack.style.transform = "rotate(180deg)";
	}else{
		arrowBlack.style.transform ="rotate(0deg)";
	}
}) ;

arrowWhite.addEventListener("click", function(){
	if( arrowWhite.style.transform =="rotate(0deg)"){
		arrowWhite.style.transform = "rotate(180deg)";
	}else{
		arrowWhite.style.transform ="rotate(0deg)";
	}
});