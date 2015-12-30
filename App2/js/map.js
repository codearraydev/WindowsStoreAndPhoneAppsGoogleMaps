var map;
var dataResults;

function initialize() {
    var myLatLng = { lat: 33.778504, lng: 72.730273 };
    var secondLatLang = { lat: 33.779721, lng: 72.735259 };
    map = new google.maps.Map(document.getElementById('mapdisplay'), {
        zoom: 12,
        center: new google.maps.LatLng(myLatLng),
        mapTypeId: google.maps.MapTypeId.TERRAIN
    });


    var infoWindow = new google.maps.InfoWindow({ map: map });

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            map.setCenter(pos);
        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }

    /*
    
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hello World!'
    });

    var marker = new google.maps.Marker({
        position: secondLatLang,
        map: map,
        title: "Heelp"
    });*/
}

eqfeed_callback = function (results) {
    dataResults = results;
}


function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
}

function addMarkers() {
    //for (var i = 0; i < 10; i++) {
    //    var quake = dataResults.features[i];
    //    var coors = quake.geometry.coordinates;
    //    var latLong = new google.maps.LatLng(coors[1], coors[0]);
    //    var marker = new google.maps.Marker({
    //        position: latLong,
    //        map: map
    //        //icon: getCircle(earthquake.properties.mag)
    //    });
    //}
    
}

function getCircle(magnitude) {
    return {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: 'red',
        fillOpacity: .2,
        scale: Math.pow(2, magnitude) / Math.PI,
        strokeColor: 'white',
        strokeWeight: .5
    };
}

google.maps.event.addDomListener(window, 'load', initialize);