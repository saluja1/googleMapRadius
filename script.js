    function createMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: {lat: 29.1492, lng: 75.7217},
          mapTypeId: 'roadmap'
        });
       
        for (var city in citymap) {

          var cityCircle = new google.maps.Circle({
            strokeColor: '#2e6da4', //color of the outer ring
            strokeOpacity: 0.8,  //transparency of the outer ring
            strokeWeight: 2,  //thickness of the outer ring
            fillColor: '#337ab7', //fill color of the circle
            fillOpacity: 0.25,  //transparancy of the circle
            map: map,
            center: citymap[city].center,
            radius: 20000     
          });
        }
    }
      

    var citymap = {
        hisar: {
          center: {lat: 29.1492, lng: 75.7217},
          population: 2714856 
        },
    };
 
 createMap();