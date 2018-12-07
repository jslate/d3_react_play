import React, { Component } from 'react';
import './App.css';
import Rudy from './Rudy';
import Trump from './Trump';
import Hillary from './Hillary';
import Bernie from './Bernie';
import TwitterChart from './TwitterChart';

class TwitterCharts extends Component {
  render() {
    return (
      <div style={{ display: 'flex' }}>
        <div style={{display: 'inline-block'}}>
          <h1>Rudy</h1>
          <TwitterChart data={Rudy} />
        </div>
        <div style={{display: 'inline-block'}}>
          <h1>Trump</h1>
          <TwitterChart data={Trump} />
        </div>
        <div style={{display: 'inline-block'}}>
          <h1>Hillary</h1>
          <TwitterChart data={Hillary} />
        </div>
        <div style={{display: 'inline-block'}}>
          <h1>Bernie</h1>
          <TwitterChart data={Bernie} />
        </div>
      </div>
    );
  }
}

export default TwitterCharts;
