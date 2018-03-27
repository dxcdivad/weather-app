import axios from 'axios';

const API_KEY = "4feeabb645ca8b01a27dc5e694c644d7";
const ROOT_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`

export function updateSearchInput(city) {

  return  {
    type: 'UPDATE_SEARCH_INPUT',
    payload: { city }
  }
}



export function getWeather(city) {
  const url = `${ROOT_URL}&q=${city}&units=imperial`;
  const request = axios.get(url);

  
  return {
    type: 'GET_WEATHER',
    payload: request
  };
}

export function getTime() {
  const time = new Date().toLocaleTimeString();
  const date = new Date().toLocaleDateString();
  const searchTime = date + ' ' + time;
  

  return {
    type: 'GET_TIME',
    payload: searchTime
  }
}


