import { combineReducers } from 'redux';
import inputReducer from './components/Input/inputReducer'


const rootReducer = combineReducers({
// add reducers
  input: inputReducer
});

export default rootReducer;
