let map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let myIcon = L.icon({
    iconUrl: './images/icon-location.svg',
    iconSize: [35, 50],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76]
});

let marker = L.marker([51.5, -0.09], {icon: myIcon}).addTo(map);

let apiKey = "at_2evE6uyFqXhL1DpzpMbYhTiwxTNxp"; 

// async function GeoAPI (s) {
//     const response = await fetch(`https://geo.ipify.org/api/v2/country?apiKey=${apiKey}&ipAddress=8.8.8.8`);
//     const data =  await response.json();
//     console.log(data)
// }

// console.log(GeoAPI());

// fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&domain=adam-mesamotors.com`)
// .then(response => response.json()).then(data => console.log(data));