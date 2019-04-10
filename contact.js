// pre load
window.addEventListener("load", function(){
  var preLoad = document.getElementsByClassName("preLoad")[0];
  setTimeout(function(){
  preLoad.style.opacity = "0";
  preLoad.style.zIndex = "-1";
  }, 2000)
});
// MAP
function initMap() {
  var mapBel = {lat: 23.8154205, lng: 20.4730821};
  var mapLes = {lat: 36.9931834, lng: 21.9417109};

  var bel = new google.maps.Map(document.getElementById('bel'), {
    zoom: 16,
    center: mapBel
  });
  var les = new google.maps.Map(document.getElementById('les'), {
    zoom: 16,
    center: mapLes
  });

  var markerBel = new google.maps.Marker({
    position: mapBel,
    map: bel,
    title: 'Click to zoom'
  });
  var markerLes = new google.maps.Marker({
  position: mapLes,
  map: les,
  title: 'Click to zoom'
  });
     
};