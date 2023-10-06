var map = new atlas.Map({
    container: 'map',
    center: [-122.33, 47.6], // Default center coordinates (e.g., Seattle)
    zoom: 12, // Default zoom level
    authOptions: {
        authType: 'subscriptionKey',
        subscriptionKey: '2RkDkZkqQaA6w0p3F94ooyrPn24Js-d-s8lespY-4ps'
    }
});

// Try to get user's location
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        var userLocation = [position.coords.longitude, position.coords.latitude];
        map.setCamera({
            center: userLocation,
            zoom: 15
        });
    });
}
var directionsManager = new atlas.service.Directions({
    routeMode: 'fastest',
    renderOptions: {
        routeLineVisible: true
    },
    language: 'en-US',
    instructionsType: 'text'
});

map.services.add(directionsManager);

var startPoint = [-122.33, 47.6]; // Replace with your starting point coordinates
var endPoint = [-122.31, 47.61]; // Replace with your destination coordinates

directionsManager.calculateRoute([startPoint, endPoint], function (response) {
    var route = response.routes[0];
    var routeShape = new atlas.data.LineString(route.geometry);
    var routeFeature = new atlas.data.Feature(routeShape);
    var routeSource = new atlas.source.DataSource();
    routeSource.add(routeFeature);
    map.sources.add(routeSource);

    var routeLayer = new atlas.layer.LineLayer(routeSource, null, {
        strokeColor: 'blue',
        strokeWidth: 5
    });
    map.layers.add(routeLayer);
});

navigator.geolocation.getCurrentPosition(
    function (position) {
        // Handle success
    },
    function (error) {
        // Handle error
    }
);

directionsManager.calculateRoute([startPoint, endPoint], function (response) {
    if (response && response.routes && response.routes.length > 0) {
        // Route calculation successful
    } else {
        // Route calculation failed
    }
});