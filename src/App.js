import React, { Component } from "react";
import "./App.css";

import Searchbar from "./containers/search_bar";
import WeatherList from "./containers/weather_list";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Searchbar />
        <WeatherList />
      </div>
    );
  }
}

export default App;
