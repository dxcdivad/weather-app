import React, { Component } from "react";

export default class Results extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (

      <div className="card">
        <div className="card-header text-white bg-primary">
          City Information
          </div>
        <div className="card-body">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>Tokyo</h2>
              <p>Lat/Long: 35.69, 139.69</p>
            </div>
          </div>
          <hr />
          <div className="row mt-4 mb-4">
            <div className="col-4 text-center">
              <label><strong>Temperature (F)</strong></label>
              <p>65.62F</p>
            </div>
            <div className="col-4 text-center">
              <label><strong>Pressure</strong></label>
              <p>997</p>
            </div>
            <div className="col-4 text-center">
              <label><strong>Humidity</strong></label>
              <p>100%</p>
            </div>
          </div>
          <div className="row">
            <div className="col-4 text-center">
              <label><strong>Lowest Temp (F)</strong></label>
              <p>62.01F</p>
            </div>
            <div className="col-4 text-center">
              <label><strong>Highest Temp (F)</strong></label>
              <p>71.01F</p>
            </div>
            <div className="col-4 text-center">
              <label><strong>Wind Speed</strong></label>
              <p>24.16mph</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}