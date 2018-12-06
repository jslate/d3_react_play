import React, { Component } from 'react';
import * as d3 from "d3";
import './App.css';

const margin = { top: 20, right: 5, bottom: 20, left: 35 };
const height = 700;
const width = 600;

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

class Chart extends Component {

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

  componentDidUpdate() {
    this.xAxis.scale(this.state.xScale);
    // d3.select(this.refs.xAxis).call(this.xAxis);
    this.yAxis.scale(this.state.yScale);
    // d3.select(this.refs.yAxis).call(this.yAxis);
  }

  render() {
    // <g ref="xAxis" transform={`translate(0, ${height - margin.bottom})`} />
    // <g ref="yAxis" transform={`translate(${margin.left}, 0)`} />


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

class App extends Component {
  render() {
    const data = [
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
    return (<Chart data={data} />);
  }
}

export default App;
