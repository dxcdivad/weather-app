import React, { Component } from "react";

export default class History extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (


        <div className="card">
          <div className="card-header text-white bg-primary">
            Search History
          </div>
          <div className="card-body">
            <div className="list-group">
              <div className="list-group-item">
                <div className="row">
                  <div className="col-md-6">
                    San Diego
                  </div>
                  <div className="col-md-6">
                    <span className="float-right">time, date</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}