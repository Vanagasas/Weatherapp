var temp;
var cond;
$(document).ready(function position() {
  $.getJSON('http://ip-api.com/json', function (data) {
    var lat = data.lat;
    var lon = data.lon;
    var location = data.city + ', ' + data.region;
    $('.country').html(location);
    getWeather(lat, lon);
  })
});
function getWeather(lat, lon) {
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=b2d3758d7d1b3c72dba58b807cebbe7e",
    function (data) {
      temp = (data.main.temp * 9 / 5 - 459.67).toFixed(1);
      $('.tempeture').html(temp + '°F');
      cond = data.weather[0].main;
      $('.condition').html(cond);
      if (cond == "Clouds") {
        $('.wicon').addClass('clouds');
        $('.wicon').html('<i class="fa fa-cloud fa-5x" aria-hidden="true"></i>')
      }
      else if (cond == "Clear") {
        $('.wicon').addClass('clear');
        $('.wicon').html('<i class="fa fa-sun-o fa-5x" aria-hidden="true"></i>');
      }
      else if (cond == "Rain") {
        $('.wicon').addClass('rain');
        $('.wicon').html('<i class="fa fa-tint fa-5x" aria-hidden="true"></i>');
      }
      else if (cond == "Snow") {
        $('.wicon').addClass('snow');
        $('.wicon').html('<i class="fa fa-snowflake-o fa-5x" aria-hidden="true"></i>');
      }
    });
}
var tempF = true;
function fc() {
  if (tempF === true) {
    $('.tempeture').html(((temp - 32) / 1.8).toFixed(1) + '°C');
    tempF = false;
  }
  else {
    $('.tempeture').html(temp + '°F');
    tempF = true;
  }
}