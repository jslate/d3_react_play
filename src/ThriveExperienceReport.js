import React, { Component } from 'react';
import * as d3 from "d3";
import './App.css';

const margin = { top: 20, right: 5, bottom: 20, left: 35 };
const height = 400;
const width = 800;

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

class thriveExperienceReport extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    const { data } = nextProps;
    if (!data) return {};

    const xExtent = d3.extent(data, d => d.date);
    const xScale = d3.scaleTime()
      .domain(xExtent)
      .range([margin.left, width - margin.right]);

    const yScale = d3.scaleLinear()
      .domain([0, 4])
      .range([height - margin.bottom, margin.top]);

    const points = data.map((d) => {
      return { x: xScale(d.date), y: yScale(d.how_often_rating) }
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
            this.state.yScale.ticks(5).map((t) =>{
              const transform = `translate(${margin.left},${this.state.yScale(t)})`;
              return (
                <g transform={transform} key={t.toString()}>
                  <rect fill="black" x="-5" y="0" width="5" height="1" />
                  <text x="-35" y="5" fontSize="8">{t}</text>
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
          <path d={this.state.lineGenerator(this.state.points)} stroke="black" strokeWidth="1" fill="none" />
          {
            this.state.points.map((d) => {
              return (
                <circle stroke="black" fill="none" strokeWidth="2" key={d.date} cx={d.x} cy={d.y} r={5} onClick={() =>
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

export default thriveExperienceReport;
