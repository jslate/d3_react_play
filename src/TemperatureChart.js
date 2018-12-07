import React, { Component } from 'react';
import * as d3 from "d3";
import './App.css';

const margin = { top: 20, right: 5, bottom: 20, left: 35 };
const height = 800;
const width = 600;

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

class TemperatureChart extends Component {

  xAxis = d3.axisBottom().tickFormat(d3.timeFormat("%b"));
  yAxis = d3.axisLeft().tickFormat(d => `${d}℉`);

  state = {
    date: '',
    high: '',
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { data } = nextProps;
    if (!data) return {};

    const xExtent = d3.extent(data, d => d.date);
    const xScale = d3.scaleTime()
      .domain(xExtent)
      .range([margin.left, width - margin.right]);

    const yExtent = d3.extent(data, d => d.high);
    const yScale = d3.scaleLinear()
      .domain(yExtent)
      .range([height - margin.bottom, margin.top]);

    const points = data.map((d) => {
      return { x: xScale(d.date), y: yScale(d.high), date: d.date, high: d.high}
    });

    const lineGenerator = d3.line().x(d => d.x).y(d => d.y);

    return { points, xScale, yScale, lineGenerator };
  }

  render() {
    return (
      <div className="App">
        <svg height={height} width={width} style={{ margin: 15 }}>
          <rect
            width={width - (margin.left + margin.right)}
            height={height - (margin.top + margin.bottom)}
            x={margin.left}
            y={margin.top}
            fill="#dddddd"
            stroke="#aaa"
          />
          {
            this.state.yScale.ticks().map((t) =>{
              const transform = `translate(${margin.left},${this.state.yScale(t)})`;
              return (
                <g transform={transform} key={t.toString()}>
                  <rect fill="black" x="-5" y="0" width="5" height="1" />
                  <text x="-35" y="5" fontSize="8">{t}℉</text>
                </g>
              )
            })
          }
          {
            this.state.xScale.ticks().map((t) =>{
              const transform = `translate(${this.state.xScale(t)},${height - margin.bottom})`;
              return (
                <g transform={transform} key={t.toString()}>
                  <rect fill="black" x="0" y="0" width="1" height="5" />
                  <text x="-7" y="15" fontSize="8">{monthNames[t.getMonth()]}</text>
                </g>
              )
            })
          }
          <path d={this.state.lineGenerator(this.state.points)} stroke="black" strokeWidth="3" fill="none" />
          {
            this.state.points.map((d) => {
              return (
                <circle fill="red" key={d.date} cx={d.x} cy={d.y} r={5} onClick={() =>
                  this.setState({
                    date: d.date,
                    high: d.high,
                  })
                } />
              )
            })
          }
        </svg>
        <div>
         {this.state.high}{this.state.high && '℉'}{this.state.high && ' on '}{this.state.date && this.state.date.toDateString()}
        </div>
      </div>
    );
  }
}

export default TemperatureChart;
