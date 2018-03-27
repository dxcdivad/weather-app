import React, { Component } from "react";

export default class Results extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    const { cityName, coord, main, wind, weather } = this.props;
    const imageURL = `https://openweathermap.org/img/w/${weather && weather[0].icon}.png`
  
    
    return (

      <div className="card">
        <div className="card-header text-white bg-primary">
          City Information
          </div>
        <div className="card-body">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>{ cityName }</h2><img src={imageURL} alt=""/>
              <br />
              <div>{ weather && weather[0].description }</div>
              <div>{ coord && coord.lat + ', '} { coord && coord.lon }</div>
            </div>
          </div>
          <hr />
          <div className="row mt-4 mb-4">
            <div className="col-4 text-center">
              <label><strong>Temperature (F)</strong></label>
              <p>{ main && main.temp  }</p>
            </div>
            <div className="col-4 text-center">
              <label><strong>Pressure</strong></label>
              <p>{ main && main.pressure }</p>
            </div>
            <div className="col-4 text-center">
              <label><strong>Humidity</strong></label>
              <p>{ main && main.humidity }</p>
            </div>
          </div>
          <div className="row">
            <div className="col-4 text-center">
              <label><strong>Lowest Temp (F)</strong></label>
              <p>{ main && main.temp_min }</p>
            </div>
            <div className="col-4 text-center">
              <label><strong>Highest Temp (F)</strong></label>
              <p>{ main && main.temp_max }</p>
            </div>
            <div className="col-4 text-center">
              <label><strong>Wind Speed</strong></label>
              <p>{ wind && wind.speed }</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}