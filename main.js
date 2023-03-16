var map = L.map('map').setView([-34.6376632,-58.6189009], 12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


var customIcon = new L.Icon({
    iconUrl: './Images/coche-espacial.png',
    
    iconSize:     [25, 25], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [10, 40], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});



var marker = L.marker([-34.6376632,-58.6189009], {icon:customIcon},{alt: 'Kyiv'})
marker.addTo(map);


//Boton de menu

const nav  = document.querySelector("nav");
const abrir  = document.getElementById("abrir");
const cerrar  = document.getElementById("cerrar");


abrir.addEventListener("click", () => {
    nav.classList.add("nav_visible");
    console.log("hola")
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("nav_visible");
})