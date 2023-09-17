mapboxgl.accessToken = 'pk.eyJ1Ijoic2FnYXJnYWRhNzMiLCJhIjoiY2xtbWxtNGtvMGsxcDJqbndmczhyemZ4byJ9.WeYWkWl9QAbRy357M71vLA';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
	center: [-43.0889,-76.1474], // starting position
    zoom: 13 // starting zoom
});

map.on('load', function () {
    map.resize();
    $('a[data-bs-toggle="tab"]').on('shown.bs.tab', function(){
        map.resize();
    });
});

// create the popup
var popup = new mapboxgl.Popup({ offset: 40 }).setText(
    'New York, Usa'
);

// create DOM element for the marker
var el = document.createElement('div');
el.id = 'marker';
 
// create the marker
// new mapboxgl.Marker(el)
//     .setLngLat([43.0481,76.1474])
//     .setPopup(popup) // sets a popup on this marker
//     .addTo(map);

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
