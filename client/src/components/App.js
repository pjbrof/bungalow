import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Dashboard from "./Dashboard";

const App = () => {
  const [currentWX, setCurrentWX] = useState({});
  const [currentAQI, setCurrentAQI] = useState({});

  useEffect(() => {
    axios
      .get("https://api.weather.gov/gridpoints/BOX/66,76/forecast")
      .then((res) => {
        setCurrentWX(res.data.properties.periods[0]);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://www.airnowapi.org/aq/observation/latLong/current/?format=application/json&latitude=${process.env.LAT}&longitude=${process.env.LNG}&distance=25&API_KEY=${process.env.AIR_NOW_APIKEY}`
      )
      .then((res) => {
        console.log(res.data);
        setCurrentAQI(res.data[0]);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

  return <Dashboard wx={currentWX} aqi={currentAQI} />;
};

ReactDOM.render(<App />, document.getElementById("app"));
