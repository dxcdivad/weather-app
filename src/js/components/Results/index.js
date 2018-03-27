import Results from "./Results";
import { connect } from 'react-redux';

function mapStoreToProps(store) {


  return {
    cityName: store.input.data.name,
    coord: store.input.data.coord,
    main: store.input.data.main,
    wind: store.input.data.wind,
    weather: store.input.data.weather
  };
}

export default connect(mapStoreToProps)(Results);