import axios from "axios";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY; // set up key in .env file
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export const fetchWeather = city => {
  const url = `${ROOT_URL}&q=${city},us`;
  const req = axios.get(url);

  console.log("request: ", req);

  return {
    type: FETCH_WEATHER,
    payload: req
  };
};
