var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=a4c3d4ece7a07bc0bf0aefc19040678b&units=imperial';



module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = '${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}';
    console.log(requestUrl);
      return axios.get(requestUrl).then(function  (res){
        if(res.data.cod && res.data.message){
          throw new Error(res.data.message);
          requestUrl;
        } else {
          return res.data.main.temp;
        }
      }, function (res){
        throw new Error(res.data.message);
      });
  }
}
