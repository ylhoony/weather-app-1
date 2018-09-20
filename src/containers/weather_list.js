import React, { Component } from "react";
import { connect } from "react-redux";

import Chart from "../components/chart";

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(w => w.main.temp);
    const pressures = cityData.list.map(w => w.main.pressure);
    const humids = cityData.list.map(w => w.main.humidity);

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Chart height={100} width={150} data={temps} color="black" units="K" />
        </td>
        <td>
          <Chart height={100} width={150} data={pressures} color="green" units="hPa" />
        </td>
        <td>
          <Chart height={100} width={150} data={humids} color="orange" units="%" />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <React.Fragment>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature (K)</th>
              <th>Pressure (hPa)</th>
              <th>Humidity (%)</th>
            </tr>
          </thead>
          <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
        </table>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ weather }) => {
  return { weather };
};

export default connect(mapStateToProps)(WeatherList);
