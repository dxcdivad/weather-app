import React, { Component } from "react";
import {
  updateSearchInput,
  getWeather,
  getTime
} from './inputActions'

//console.log(getTime());

export default class Input extends Component {
  constructor(props) {
    super(props);


  this.handleGetWeather = this.handleGetWeather.bind(this);
  this.handleSearchInput = this.handleSearchInput.bind(this);
  this.handleGetWeatherPreset = this.handleGetWeatherPreset.bind(this);
  }



  handleSearchInput(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateSearchInput(value));
  }

  

  handleGetWeather(e) {
    e.preventDefault();
    const { city, time, dispatch } = this.props;
    dispatch(getTime());
    dispatch(getWeather(city));
  }


  handleGetWeatherPreset(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(getWeather(e.target.value));
    dispatch(getTime());
  }


  render() {
    const { city } = this.props;
    return (

        <div>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <button className="nav-link active btn" 
                 value="San Diego"
                 onClick={this.handleGetWeatherPreset}
                 >San Diego</button>
            </li>
            <li className="nav-item">
              <button className="nav-link active btn" 
                 value="New York"
                 onClick={this.handleGetWeatherPreset}
                 >New York</button>
            </li>
            <li className="nav-item">
              <button className="nav-link active btn" 
                 value="Washington"
                 onClick={this.handleGetWeatherPreset}
                 >Washington D.C</button>
            </li>
            <li className="nav-item">
              <button className="nav-link active btn" 
                 value="Tokyo"
                 onClick={this.handleGetWeatherPreset}
                 >Tokyo</button>
            </li>
            <li className="nav-item">
              <button className="nav-link active btn" 
                 value="London"
                 onClick={this.handleGetWeatherPreset}
                 >London</button>
            </li>
          </ul>
          <form onSubmit={this.handleGetWeather}>
          <div className="input-group">
            <input type="text"
              name="search"
              className="form-control"
              placeholder="Search any city across the world!"
              value={ city }
              onChange={ this.handleSearchInput }>
            </input>
            <div className="input-group-btn">
              <button
                type="button"
                className="btn btn-primary"
                onClick={ this.handleGetWeather }>
                Go!
              </button>
            </div>    
          </div>
          </form>
        </div>
    )
  }
}