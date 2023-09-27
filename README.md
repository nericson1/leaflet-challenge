# leaflet-challenge

## Description
This repository contains multiple files that culminate in the display of a map through the web browser in which information can be found regarding the location, magnitude, and depth of all 4.5+ earthquakes in the past 30 days. This data is read into a JavaScript file using the D3 library and a geoJSON file provided by the United States Geological Survey (USGS). Leaflet is used to create the map layer, markers, and legend seen on the map. The JavaScript code, found on the file titled 'logic.js', is read into the html code on line 31 of the file titled 'index.html'. Additionally, a CSS file titled 'style.css' is read into the index.html file on line 16, which enables the legend functionality of the map. 

## References
While some of my resources for this assignment did come from activities done in class, I did have to do additional research and use outside resources as well in order to be successful.

### Adding a custom legend
I incorporated code from the Leaflet documentation website linked below to assist in creating the legend for my map. My legend code based on the official documentation can be found on lines 52-65 of logic.js. While some of the syntax from the documentation was used in my code, I did have to modify certain components to fit my unique needs. This includes modifying the grades array, as well as setting the location for the legend that I wanted.

Link: https://leafletjs.com/examples/choropleth/

### PointToLayer
While conducting reserach to figure out the best way to proceed with this project, I discovered the geoJSON function called PointToLayer which I implemented on line 35 of logic.js. This function made the part of the project where I need to create circle markers very easy, as it takes latitude and longitude values and returns a marker. From there, I was able to add my own styling code to determine the size and color of the markers created.

Link: https://geospatialresponse.wordpress.com/2015/07/26/leaflet-geojson-pointtolayer/
