import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Button } from './Components/Button';
import Tab from './Components/Tab';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div id="mainDiv">
    <div id="md1">
      <h1>Hi</h1>
    </div>
    <div id="md2">
      <div>
        <a href="#">Today</a>
        <a href="#">Tomorrow</a>
      </div>
      <div className="tabs">
        <Tab title="Wind" value1="6 km/hr" value2="East"/>
        <Tab title="Wind" value1="6 km/hr" value2="East"/>
        <Tab title="Wind" value1="6 km/hr" value2="East"/>
        <Tab title="Wind" value1="6 km/hr" value2="East"/>
        <Tab title="Wind" value1="6 km/hr" value2="East"/>
        <Tab title="Wind" value1="6 km/hr" value2="East"/>
        <Tab title="Wind" value1="6 km/hr" value2="East"/>
        <Tab title="Wind" value1="6 km/hr" value2="East"/>
        <Tab title="Wind" value1="6 km/hr" value2="East"/>
      </div>
      <p>All data provided by AccuWeather</p>
    </div>
  </div>
);