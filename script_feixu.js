mapboxgl.accessToken = 'pk.eyJ1IjoiZmlubnpsIiwiYSI6ImNqbjM5ejc4aDUxcmMzcW54OGJ0YXk3djQifQ.M_f-g9pSA2yKFiZjN-S_DA';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/alexyshu226/cjvgs9wdh0eki1fqmvaycd9vs',
  center: [-0.127,51.517],
  zoom: 9.69
});
    
    

var zoomThreshold = 10.5;
    
map.on('load', function () {

    
var layers = map.getStyle().layers;
// Find the index of the first symbol layer in the map style
var firstSymbolId;
for (var i = 0; i < layers.length; i++) {
if (layers[i].type === 'symbol') {
firstSymbolId = layers[i].id;
break;
}
}
    
map.addLayer({
    
   'id': 'australia_5years-1j1wue',
   'type': 'fill',
   'source': {
   'type': 'vector',
   'url': 'mapbox://finnzl.2o1xn5gz'
   },
    'maxzoom': zoomThreshold,
   'source-layer': 'australia_5years-1j1wue',
   'layout': {'visibility': 'none'},
   'paint': {
   'fill-color':[ 
            'interpolate',  
           ['linear'],
             ['number',["get", "population"]],
        
             7,"rgb(232, 244, 255)",
            998,"rgb(33, 57, 111)"        
        ],

    },
});
    
map.addLayer({
   
   'id': 'poland_5years-16ntu0',
   'type': 'fill',
   'source': {
   'type': 'vector',
   'url': 'mapbox://finnzl.2fy2jjwn'
   },
    'maxzoom': zoomThreshold,
   'source-layer': 'poland_5years-16ntu0',
    
   'layout': {'visibility': 'none'},
   'paint': {
   'fill-color':[ 
            'interpolate',  
            ['linear'],
            ['number',["get", "population"]],
        
             9, "rgb(232, 244, 255)",
            1500,"rgb(114, 133, 173)",
            3071,"rgb(26, 47, 96)"
            ],
       },
});     
    
map.addLayer({
   
   'id': 'romania_5years-9c8rqj',
   'type': 'fill',
   'source': {
   'type': 'vector',
   'url': 'mapbox://finnzl.2lj2fwrg'
   },
   'maxzoom': zoomThreshold,
   'source-layer': 'romania_5years-9c8rqj',
   'layout': {'visibility': 'none'},
   'paint': {
   'fill-color':[ 
           'interpolate',  
           ['linear'],
            ['number',["get", "population"]],
        
             7, "rgb(232, 244, 255)",
            1500,"rgb(114, 133, 173)",
            9753,"rgb(26, 47, 96)"
            ],

       },
}); 
    
map.addLayer({
   
   'id': 'india_5years-cyjqys',
   'type': 'fill',
   'source': {
   'type': 'vector',
   'url': 'mapbox://finnzl.dr2wwb1k'
   },
   'maxzoom': zoomThreshold,
   'source-layer': 'india_5years-cyjqys',
   'layout': {'visibility': 'none'},
   'paint': {
   'fill-color':[ 
           'interpolate',  
           ['linear'],
             ['number',["get", "population"]],
        
             40,'rgb(232, 244, 255)',
            1997,'rgb(33, 57, 111)'
            ],

},
});  
    
map.addLayer({
   
   'id': 'italy_5years-9fbt5p',
   'type': 'fill',
   'source': {
   'type': 'vector',
   'url': 'mapbox://finnzl.c1flijep'
   },
   'maxzoom': zoomThreshold,
   'source-layer': 'italy_5years-9fbt5p',
   'layout': {'visibility': 'none'},
   'paint': {
   'fill-color':[ 
           'interpolate',  
           ['linear'],
            ['number',["get", "population"]],
        
             35, "rgb(232, 244, 255)",
            1500,"rgb(114, 133, 173)",
            4434,"rgb(26, 47, 96)"
 ],

       },
});    
    
map.addLayer({
   
   'id': 'employ-2i7c5p',
   'type': 'fill-extrusion',
   'source': {
   'type': 'vector',
   'url': 'mapbox://finnzl.da4awmle'
   },
    'minzoom': zoomThreshold,
   'source-layer': 'employ-2i7c5p',
    paint: {
            'fill-extrusion-opacity': 0.5,
            'fill-extrusion-color':['get','color'],
            'fill-extrusion-height': {
                property: 'sum',
                type: 'exponential',
                stops: [
                    [51265, 0],
                    [100000, 500],
                    [150000, 1000],
                    [200000, 1500],
                    [250000, 2000],
                    [300000, 2500],
                    [350000, 3000],
                    [433750, 4000]
                ]
            }
}
});     
    
map.addLayer({
   
   'id': 'labels',
   'type': 'symbol',
   'source': {
   'type': 'vector',
   'url': 'mapbox://finnzl.b4d4qalq'
   },
   'source-layer': 'labels-5z8hw5',
    "layout": {
    "text-field": ['format',
    ['upcase', ['get', 'NAME']], { 'font-scale': .5 },
],
    "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
    "text-offset": [0, 0.3],
    "text-anchor": "top"
    }



});
           
       });
    
    
var toggleableLayerIds = [ 'australia_5years-1j1wue', 'india_5years-cyjqys','romania_5years-9c8rqj', 'poland_5years-16ntu0','italy_5years-9fbt5p'];
var layername=['Australia','India','Romania','Poland','Italy']
 

    
for (var i = 0; i < toggleableLayerIds.length; i++) {

    var id = toggleableLayerIds[i];
    var names=layername[i];
    var link = document.createElement('a');
    link.href = '#';
    link.className = '';
    link.textContent = names;
    link.clicked=id;
    link.onclick = function (e) {
        var clickedLayer = this.clicked;
        
//        e.preventDefault();
        e.stopPropagation();
        var visibility = map.getLayoutProperty(clickedLayer, 'visibility');
        if (visibility === 'visible') {
            map.setLayoutProperty(clickedLayer, 'visibility', 'none');
            this.className = '';
            } else {
                this.className = 'active';
                map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
                }
    };
    
var layers = document.getElementById('menu');
    layers.appendChild(link);
    
function filterBy(year) {
    var filters = ['==', 'year', year];
    map.setFilter('australia_5years-1j1wue',filters)
    map.setFilter('india_5years-cyjqys',filters)
    map.setFilter('romania_5years-9c8rqj',filters)
    map.setFilter('poland_5years-16ntu0',filters)
    map.setFilter('italy_5years-9fbt5p',filters)
    }
    
function returndata(year){
    var chart2012=[0.671621101, 0.025581179, 0.150191992, 0.045812278, 0.057610799, 0.049182651];
    var chart2013=[0.713754907, 0.023672364, 0.127282678, 0.038905302, 0.051990322, 0.044394427];
    var chart2014=[0.757744028, 0.022573478, 0.108328175, 0.032405455, 0.042790631, 0.036158233];
    var chart2015=[0.749383914, 0.026366927, 0.112072781, 0.038446929, 0.043388177, 0.030341273];
    var chart2016=[0.74082583, 0.027304772, 0.11952653, 0.037019003, 0.045145628, 0.030178237];
        if (year==2012){
            return chart2012
        };
        if (year==2013){
            return chart2013
        };
        if (year==2014){
            return chart2014
        };
        if (year==2015){
            return chart2015
        };
        if (year==2016){
            return chart2016
        }
}

var categories=['European Union', 'Non-EU European', 'Asia', 'Oceania', 'Americas', 'Africa']
var colors=['#fc9977','#a3d96a','#57cfc9','#70a5d4','#6d74cf']

function pie(year){
  new Chart(document.getElementById('pie'), {
      type: 'pie',
      data: {
          labels: categories,
          datasets: [{
              label:'pie',
              data: returndata(year),
              backgroundColor: colors,
           
          }]
      },
      options: {
          animation:false,
      }
  });
}

    
document.getElementById('slider').addEventListener('input', function(e) {
      var year = parseInt(e.target.value);
      filterBy(year);
      pie(year);
      });
        }
    
map.on('click', 'employ-2i7c5p', function (e) {
    var coordinates = e.lngLat;
    var Areaname = e.features[0].properties.Area;
    var top1= e.features[0].properties.top1;
    var top1number= e.features[0].properties.top1number;
    var top2= e.features[0].properties.top2;
    var top2number= e.features[0].properties.top2number;
    var top3= e.features[0].properties.top3;
    var top3number= e.features[0].properties.top3number;
        var Areayear= e.features[0].properties.year;
    
              new mapboxgl.Popup({offset:[0,-6],closeButton: true})
            .setLngLat(coordinates)
            .setHTML("<h3>" + Areaname + "</h3>Top1 industry:" +
top1 + "<br />Proportion: " + top1number+"<br />Top2 industry:"+top2+"<br />Proportion: "+top2number+"<br />Top3 industry:"+top3+"<br />Proportion: "+top3number)
            .addTo(map); 
});

    
    
    
map.on('click', 'australia_5years-1j1wue', function (e) {
        var coordinates = e.lngLat;
        var Areaname = e.features[0].properties.Area;
        var Areapopulation= e.features[0].properties.population;
        var Areayear= e.features[0].properties.year;
    
              new mapboxgl.Popup({offset:[0,-6],closeButton: true})
            .setLngLat(coordinates)
            .setHTML("<h3>Australian in&nbsp;" + Areaname + "</h3>Year:" +
Areayear + "<br />Number of people: " + Areapopulation)
            .addTo(map); 
});

map.on('click', 'india_5years-cyjqys', function (e) {
        var coordinates2 = e.lngLat;
        var Areaname2 = e.features[0].properties.Area;
        var Areapopulation2= e.features[0].properties.population;
        var Areayear2= e.features[0].properties.year;
    
              new mapboxgl.Popup({offset:[0,0],closeButton: true})
            .setLngLat(coordinates2)
            .setHTML("<h3>Indian in&nbsp;" + Areaname2 + "</h3>Year:" +
Areayear2 + "<br />Number of people: " + Areapopulation2)
            .addTo(map); 
});
    
map.on('click', 'romania_5years-9c8rqj', function (e) {
        var coordinates3 = e.lngLat;
        var Areaname3 = e.features[0].properties.Area;
        var Areapopulation3= e.features[0].properties.population;
        var Areayear3= e.features[0].properties.year;
    
              new mapboxgl.Popup({offset:[0,6],closeOnClick: true})
            .setLngLat(coordinates3)
            .setHTML("<h3>Romanian in&nbsp;" + Areaname3 + "</h3>Year:" +
Areayear3 + "<br />Number of people: " + Areapopulation3)
            .addTo(map); 
});
    
map.on('click', 'poland_5years-16ntu0', function (e) {
        var coordinates3 = e.lngLat;
        var Areaname3 = e.features[0].properties.Area;
        var Areapopulation3= e.features[0].properties.population;
        var Areayear3= e.features[0].properties.year;
    
              new mapboxgl.Popup({offset:[0,6],closeOnClick: true})
            .setLngLat(coordinates3)
            .setHTML("<h3>Pole in&nbsp;" + Areaname3 + "</h3>Year:" +
Areayear3 + "<br />Number of people: " + Areapopulation3)
            .addTo(map); 
});
    
map.on('click', 'italy_5years-9fbt5p', function (e) {
        var coordinates3 = e.lngLat;
        var Areaname3 = e.features[0].properties.Area;
        var Areapopulation3= e.features[0].properties.population;
        var Areayear3= e.features[0].properties.year;
    
              new mapboxgl.Popup({offset:[0,6],closeOnClick: true})
            .setLngLat(coordinates3)
            .setHTML("<h3>Italian in&nbsp;" + Areaname3 + "</h3>Year:" +
Areayear3 + "<br />Number of people: " + Areapopulation3)
            .addTo(map); 
});
    
document.getElementById('Reset').addEventListener('click', function () {
map.flyTo({

center: [-0.132036, 51.424489],
bearing: 0,
zoom: 10.6,
pitch: 55.60
});
}); 
document.getElementById('Newham').addEventListener('click', function () {  
 
map.flyTo({

center: [0.033697, 51.521932],
bearing: -30.82,
zoom: 12.32,
pitch: 49
});
}); 
document.getElementById('Brent').addEventListener('click', function () {

map.flyTo({

center: [-0.261805, 51.552096],
bearing: 69.82,
zoom: 12.32,
pitch: 49
});
});
document.getElementById('CityofLondon').addEventListener('click', function () {
 
map.flyTo({

center: [-0.076541, 51.526959],
bearing: 0,
zoom: 12.32,
pitch: 53.5
});
});
document.getElementById('HammersmithandFulham').addEventListener('click', function () {
    
    map.flyTo({
            center: [-0.209308, 51.485061],
bearing: 24.90,
zoom: 12.69,
pitch: 44.50
        });
    });
document.getElementById('Merton').addEventListener('click', function () {

map.flyTo({

center: [-0.192652, 51.397908],
bearing: -50.61,
zoom: 12.42,
pitch: 59.50
});
});
document.getElementById('Haringey').addEventListener('click', function () {

map.flyTo({

center: [-0.103485, 51.588028],
bearing: 69.82,
zoom: 12.32,
pitch: 49
});
});
    
var layers = ['Administrative and support service activities','Financial and insurance activities', 'Health', 'Information and Communication', 'Professional, Real Estate, Scientific and technical activities', 'Retail','Transportation and Storage'];
var colors = ['#584478', '#fcbd90', "#80d996", '#57cfc9', '#70a5d4', '#e1afbe', '#b48d6c']; 
for (i = 0; i < layers.length; i++) {
  var layer = layers[i];
  var color = colors[i];
  var item = document.createElement('div');
  var key = document.createElement('span');
  key.className = 'legend2-key';
  key.style.backgroundColor = color;

  var value = document.createElement('span');
  value.innerHTML = layer;
  item.appendChild(key);
  item.appendChild(value);
  legend2.appendChild(item);
}
 

