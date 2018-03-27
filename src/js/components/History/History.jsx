import React, { Component } from "react";




export default class History extends Component {
  constructor(props) {
    super(props);

  }




  render() {
    const { searchItems, searchTime } = this.props;


    return (

        <div className="card">
          <div className="card-header text-white bg-primary">
            Search History
          </div>
          <div className="card-body">
            <div className="list-group">
            {searchItems.map((searchItem, i) => (
              <div className="list-group-item"
                   key={i}>
                <div className="row">
                  <div className="col-md-6">
                    { searchItem }
                  </div>
                  <div className="col-md-6">
                    <span className="float-right">
                      { searchTime[i] }
                    </span>
                  </div>
                </div>
              </div>
          ))}
          </div>
        </div>
        </div>
    )
  }
}