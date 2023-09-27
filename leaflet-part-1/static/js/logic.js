// Creating the map object
let map = L.map("map", {
    center: [39.7392, -104.9903],
    zoom: 5
  });
  

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
  

// Use this link to get the GeoJSON data for the past 30 days of M4.5+ earthquakes
let link = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson";


// Magnitude color function, sets the color to become darker as the magnitude increases
function getColor(d) {
    return d > 300 ? '#084594' :
           d > 250  ? '#2171b5' :
           d > 200  ? '#4292c6' :
           d > 150  ? '#6baed6' :
           d > 100   ? '#9ecae1' :
           d > 50   ? '#c6dbef' :
           d > 0   ? '#eff3ff' :
                    '#000000';
}

// Getting the GeoJSON data
d3.json(link).then(function(data) {
    // Creating a GeoJSON layer with the retrieved data    
    L.geoJSON(data, {
        // using predefined geoJSON function to create markers at the latitude and longitude points
        pointToLayer: function (feature, latlng) {
            return new L.circleMarker (latlng, {
                // setting the radius of the circle marker to be proportional to the magnitude of the earthquake
                radius: ((feature.properties.mag ** 2) / 2),
                // setting the color or the circle marker to be dependent upon the depth of the earthquake
                fillColor: getColor(feature.geometry.coordinates[2]),
                color: "#000",
                weight: 1,
                opacity: 1,
                fillOpacity: 1
            // creating the popup feature for each marker, displaying it's location and magnitude
            }).bindPopup(`<h1>${feature.properties.place}</h1><hr><h3>Magnitude: ${feature.properties.mag}</h3>`);
        },
    }).addTo(map);
    });

    
// Create the legend
var legend = L.control({position: "bottomright"});

// Create the legend grade bins, colors, and display text
legend.onAdd = function(map) {
  var div = L.DomUtil.create("div", "legend"),
  grades = [0, 50, 100, 150, 200, 250, 300];
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
        }
        return div;
};

// Add legend to the map
legend.addTo(map);