var defaultBounds = new google.maps.LatLngBounds(new google.maps.LatLng(-30.5595, 30.9375),
    new google.maps.LatLng(-30.5595, 30.9375));


//map creation
var tuberMap = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -26.2485, lng: 27.8540 },
    bound: defaultBounds,
    zoom: 6
});

function onLocationPress(input) {

    let autocomplete;

    autocomplete = new google.maps.places.Autocomplete(input, {
        type: ['geocode'],
        componentRestrictions: { 'country': ['ZA'] },
        fields: ['place_id', 'geometry', 'name']
    });

    autocomplete.setFields(
        ['address_components', 'geometry', 'icon', 'name']);
    
    google.maps.event.addListener(autocomplete, 'place_changed', function () {
        var place = autocomplete.getPlace();

        if (!place.geometry) {
            return;
        }
        if (place.geometry.viewport) {

            //reload map with new property
            var lat_ = place.geometry.location.lat();
            document.getElementById('latitude').value = lat_;
            var lng_ = place.geometry.location.lng();
            document.getElementById('longitude').value = lng_;
            console.log(place.name);

            addMarkerWithProps({ lat: lat_, lng: lng_ });

        } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17);
        }
    });

}

function putMarkerForTutor() {
    var lat_ = document.getElementById('latitude').value;
    var lng_ = document.getElementById('longitude').value;

    if (lat_ != null) {
        addMarkerWithProps({ lat: lat_, lng: lng_ });
        console.log(lat_);
    }

}

function addMarkerWithProps(coords) {
    //adding a marker
    var marker = new google.maps.Marker({
        position: coords,
        draggable: true,
        animation: google.maps.Animation.DROP,
        map: tuberMap
    });

    google.maps.event.addListener(marker, 'dragend', function () {
        geocodePosition(marker.getPosition());
    });

    function geocodePosition(pos) {
        geocoder = new google.maps.Geocoder();
        geocoder.geocode
            ({
                latLng: pos
            },
                function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        document.getElementById('latitude').value = pos.lat();
                        document.getElementById('longitude').value = pos.lng();

                        //recenter map 
                        tuberMap.setCenter(marker.position);
                    }
                    else {
                        //alert location abstract
                    }
                }
            );
    }
}