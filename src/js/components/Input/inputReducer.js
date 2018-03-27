const defaultState = {
  city: '',
  data: '',
  searchItems: [],
  searchTime: []
}


export default function inputReducer(state = defaultState, action) {
  const { type, payload } = action;




  switch (type) {
    case 'UPDATE_SEARCH_INPUT': {

      return {
        ...state,
        city: payload.city
      };
    }


    case 'GET_WEATHER_FULFILLED': {


      return {
        ...state,
        data: payload.data,
        searchItems: [payload.data.name, ...state.searchItems]
      };
    }

    case 'GET_TIME': {

      return {
        ...state,
        searchTime: [payload, ...state.searchTime]
      }
    }

    

    default: {
      return state;
    }
  }
}