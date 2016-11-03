function initMap() {
        var lanyuLoc = {lat: 40.741859, lng: -73.990414};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 18,
          center: lanyuLoc,
          scrollwheel: false,
          draggable: false
        });
        var marker = new google.maps.Marker({
          position: lanyuLoc,
          map: map
        });
      }