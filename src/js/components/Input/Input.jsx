import React, { Component } from "react";

export default class Input extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (

      <form>
        <div className="form-group">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a className="nav-link active" href="#">San Diego</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">New York</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">Washington D.C</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">Tokyo</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">London</a>
            </li>
          </ul>
          <div className="input-group">
            <input type="text"
              name="search"
              className="form-control"
              placeholder="Search any city across the world!">
            </input>
            <div className="input-group-btn">
              <button
                type="button"
                className="btn btn-primary">
                Go!
              </button>
            </div>
          </div>
        </div>
      </form>
    )
  }
}