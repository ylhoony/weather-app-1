import React, { Component } from "react";

import Searchbar from "./containers/search_bar";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Searchbar />
      </div>
    );
  }
}

export default App;
