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

//navigation animation
const hamburger = document.querySelector('#nav__hamburger');
const overlay = document.querySelector('.overlay');
const overlayMenu = document.querySelector('.overlay__menu');
const exit = document.querySelector('.overlay__exit');

hamburger.addEventListener('click', function(){
    overlay.style.clipPath = 'circle(100%)';
    overlayMenu.style.opacity = 1;
    overlayMenu.style.marginTop = '100px';
    exit.style.opacity = 1;
})

exit.addEventListener('click', function(){
    overlay.style.clipPath = 'circle(0%)';
    overlayMenu.style.opacity = 0;
    overlayMenu.style.marginTop = '80px';
    exit.style.opacity = 0;
})