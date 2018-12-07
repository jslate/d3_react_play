import React, { Component } from 'react';
import './App.css';
import TwitterCharts from './TwitterCharts';
import TemperatureChart from './TemperatureChart';
import TemperatureChartD3Axis from './TemperatureChartD3Axis';
import ThriveExperienceReport from './thriveExperienceReport';

const tempuratureData = [
  { date: new Date('1/1/2018'), high: 25 },
  { date: new Date('1/10/2018'), high: 30 },
  { date: new Date('1/30/2018'), high: 34 },
  { date: new Date('2/8/2018'), high: 34 },
  { date: new Date('2/30/2018'), high: 32 },
  { date: new Date('3/15/2018'), high: 45 },
  { date: new Date('3/30/2018'), high: 47 },
  { date: new Date('4/30/2018'), high: 60 },
  { date: new Date('5/13/2018'), high: 64 },
  { date: new Date('6/2/2018'), high: 70 },
  { date: new Date('6/16/2018'), high: 68 },
  { date: new Date('7/13/2018'), high: 77 },
  { date: new Date('8/13/2018'), high: 90 },
  { date: new Date('9/5/2018'), high: 64 },
  { date: new Date('10/18/2018'), high: 55 },
  { date: new Date('11/25/2018'), high: 40 },
];

const thriveExperienceReportData = [
  {
    date: new Date('2017-07-30'),
    how_often_rating: 3
  },
  {
    date: new Date('2017-08-31'),
    how_often_rating: 3
  },
  {
    date: new Date('2017-10-26'),
    how_often_rating: 3
  },
  {
    date: new Date('2017-11-07'),
    how_often_rating: 3
  },
  {
    date: new Date('2017-11-20'),
    how_often_rating: 3
  },
  {
    date: new Date('2018-01-03'),
    how_often_rating: 3
  },
  {
    date: new Date('2018-01-04'),
    how_often_rating: 3
  },
  {
    date: new Date('2018-01-16'),
    how_often_rating: 3
  },
  {
    date: new Date('2018-01-21'),
    how_often_rating: 3
  },
  {
    date: new Date('2018-01-27'),
    how_often_rating: 3
  },
  {
    date: new Date('2018-02-09'),
    how_often_rating: 2
  },
  {
    date: new Date('2018-02-23'),
    how_often_rating: 2
  },
  {
    date: new Date('2018-03-08'),
    how_often_rating: 1
  },
  {
    date: new Date('2018-03-14'),
    how_often_rating: 1
  },
  {
    date: new Date('2018-04-12'),
    how_often_rating: 3
  },
  {
    date: new Date('2018-05-12'),
    how_often_rating: 3
  },
  {
    date: new Date('2018-06-08'),
    how_often_rating: 3
  },
  {
    date: new Date('2018-07-08'),
    how_often_rating: 2
  },
  {
    date: new Date('2018-08-07'),
    how_often_rating: 3
  },
  {
    date: new Date('2018-09-07'),
    how_often_rating: 2
  },
  {
    date: new Date('2018-10-07'),
    how_often_rating: 2
  }
];

class App extends Component {

  state = {
    show: 'thriveExperienceReport',
  }

  renderMainContent() {
    switch (this.state.show) {
      case 'thriveExperienceReport':
        return <ThriveExperienceReport data={thriveExperienceReportData} />
      case 'temperatureChart':
        return <TemperatureChart data={tempuratureData} />
      case 'temperatureChartD3Axis':
        return <TemperatureChartD3Axis data={tempuratureData} />
      case 'tweetChart':
        return <TwitterCharts />
      default:
        return <TemperatureChart data={tempuratureData} />
    }
  }

  render() {
    return (
      <div>
        <button onClick={(() => this.setState({ show: 'thriveExperienceReport'}))} value="x">Thrive Experience Report</button>
        <button onClick={(() => this.setState({ show: 'temperatureChart'}))} value="x">Temperature Chart</button>
        <button onClick={(() => this.setState({ show: 'temperatureChartD3Axis'}))} value="x">Temperature Chart D3 Axis</button>
        <button onClick={(() => this.setState({ show: 'tweetChart'}))} value="x">Tweet Chart</button>
        {this.renderMainContent()}
      </div>
    );
  }
}

export default App;
