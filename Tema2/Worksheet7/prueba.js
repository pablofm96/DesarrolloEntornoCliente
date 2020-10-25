var latitud = 36.7411326;
var longitud = -3.5112533;


















/* var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  }; */
  
  function success(pos) {
    var crd = pos.coords;

    var latitud = crd.latitud;
    var longitud = crd.longitud;
  
    var map = L.map('mapid').setView([latitud, longitud], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    L.marker([36.7411326 -3.5112533]).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success);