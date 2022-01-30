import React from "react";
import styled from "styled-components";
import Compass from "./Compass";

import "../../main.css";

const Title = styled.p`
  font-size: 2rem;
  margin: 0;
`;

const Temperature = styled.h1`
  font-size: 15rem;
  margin: 0;
  padding-bottom: 3rem;
  font-weight: bold;
`;

const Dashboard = ({ wx, aqi }) => {
  console.log("dash aqu", aqi);
  return (
    <>
      <div className="overview">
        <Title>{wx.name}</Title>
        <p>{wx.shortForecast}</p>
      </div>
      <section className="centered">
        <Temperature>
          {wx.temperature}&deg;
          <span style={{ fontSize: "3rem", fontWeight: "900" }}>
            {wx.temperatureUnit}
          </span>
        </Temperature>
      </section>

      <div className="aqi">AQI: {aqi?.AQI}</div>
      <div className="wind">
        <p>
          Wind: <Compass direction={wx.windDirection} />
        </p>
        <p>
          {wx.windDirection} {wx.windSpeed}{" "}
        </p>
      </div>
    </>
  );
};

export default Dashboard;
