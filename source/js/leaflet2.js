const makeMap = () => {

  var map = L.map('map').setView([59.968322, 30.317359], 17);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }).addTo(map);

  var myIcon = L.icon({
    iconUrl: '../../img/icons/stack.svg#map-pin',
    iconSize: [38, 50],
    iconAnchor: [19, 50],
  });

  L.marker([59.968322, 30.317359], {icon: myIcon}).addTo(map);
};

export { makeMap };
