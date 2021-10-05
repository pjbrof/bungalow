import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Dashboard from "./Dashboard";

const App = () => {
  const [currentWX, setCurrentWX] = useState({});
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

  return <Dashboard wx={currentWX} />;
};

ReactDOM.render(<App />, document.getElementById("app"));
