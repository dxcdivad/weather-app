import React from "react";
import Input from "./components/Input";
import Results from "./components/Results";
import History from "./components/History";

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron" >
          <h1 className="display-3 text-center">Weather App</h1>
        </div>
        <Input />
        <div className="row">
          <div className="col-6">
          <Results />
          </div>
          <div className="col-6">
          <History />
          </div>
        </div>
      </div>

    );
  }
}
