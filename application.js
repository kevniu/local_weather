$(document).ready(function(){

var key = 'e5c90c4d15b169b954f02afb5b6a0def';
var lat, lon, api_url;

if(navigator.geolocation) {

  $('#showTemp').on('click', function () {
    navigator.geolocation.getCurrentPosition(success);

    function success(position) {
      lat = position.coords.latitude;
      lon = position.coords.longitude;

      api_url = 'http://api.openweathermap.org/data/2.5/weather?lat=' +
                lat + '&lon=' +
                lon + '&units=imperial&appid=' +
                key;

      $.ajax({
        url: api_url,
        method: 'GET',
        success: function(data){
          var tempr = data.main.temp;
          $('#result').text(tempr + '°');
        }
      });
    }
  });

} else {
  alert('Geolocation is not supported');
}

});
