const BASE_URL = 'http:///api.openweathermap.org/data/2.5/weather?';
const API_KEY = 'ad2bf666b2930e7d66041e52e5626a14';

export const fetchWeather = () => dispatch => {
    console.log("Fetchweather");
    let zipcode = 94070;
    fetch(`${BASE_URL}zip=${zipcode}&APPID=${API_KEY}`)
    .then(res => res.json())
    .then(data => dispatch(fetchWeatherSuccess(data)))
    .catch(err => dispatch(fetchWeatherFail(err)))
}

export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS'
export const fetchWeatherSuccess = (data) => ({
  type: FETCH_WEATHER_SUCCESS,
  payload: data
});

export const FETCH_WEATHER_FAIL = 'FETCH_WEATHER_FAIL'
export const fetchWeatherFail = (err) => ({
  type: FETCH_WEATHER_FAIL,
  payload: err
});

