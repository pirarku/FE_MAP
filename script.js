const ipAddress = document.getElementById('ip-address');
const ipAddText = document.getElementById('ip-add');
const locText = document.getElementById('location');
const timezoneText = document.getElementById('timezone');
const ispText = document.getElementById('isp');

const btn = document.getElementById('btn');
const map = L.map('map', {zoomControl: false});
const pattern = /^([0-9]{0,3})\.([0-9]{0,3})\.([0-9]{0,3})\.([0-9]{0,3})/;

//IPify api key
let apiKey = "at_2evE6uyFqXhL1DpzpMbYhTiwxTNxp"; 

const leaflet = (lat, lng) => {
    //leaflet icon
    let myIcon = L.icon({
        iconUrl: './images/icon-location.svg',
        iconSize: [40, 50],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76]
    });
        //leaflet default map code
    map.setView([lat, lng], 13);
    //leaflet image map
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    //leaflet marker
    let marker = L.marker([lat, lng], {icon: myIcon}).addTo(map);
}

const outupData = (data) => {
    const dataloc = data.location;
    const lat = dataloc.lat;
    const lng = dataloc.lng;
    const ipAdd = data.ip;
    const location = {
        city: dataloc.city,
        region: dataloc.region,
        postal: dataloc.postal ? dataloc.postal : '--'
    }
    const isp = data.isp;
    const timezone = dataloc.timezone;
    ipAddText.textContent = ipAdd;
    locText.textContent = `${location.city}, ${location.region}, ${location.postal}`;
    timezoneText.textContent = timezone;
    ispText.textContent = isp;
    leaflet(lat,lng);
} 



const ipify = async (ip) => {
    try{
        const response = pattern.test(ip) ? 
                        await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ip}`) :
                        await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&domain=${ip}`);
        const data = await response.json();
        outupData(data);
    }catch(e) {
        console.log(e);
        
    }
}


const search = () => {
    ipify(ipAddress.value);
}

const enterSearch = (e) => {
    if(e.keyCode === 13){
        ipify(e.target.value)
    }
}

btn.addEventListener('click', search);
ipAddress.addEventListener('keypress', enterSearch);