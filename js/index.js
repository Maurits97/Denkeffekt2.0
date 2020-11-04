//set auto copyright
var copyrightText = document.getElementById('copyright');
var dt = new Date();
copyrightText.innerHTML = 'Copyright © ' + dt.getFullYear() + ' Denkeffekt';

// script for google maps
function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(52.394253, 4.615960),
        zoom: 15,
    }
    var Overveen = {lat: 52.395222, lng: 4.615837};
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
	var marker = new google.maps.Marker({position: Overveen, map: map});
}