import React, { Component } from 'react';
import * as d3 from "d3";
import './App.css';

const margin = { top: 20, right: 5, bottom: 20, left: 35 };
const height = 800;
const width = 600;

class TemperatureChartD3Axis extends Component {

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
    d3.select(this.refs.xAxis).call(this.xAxis);
    this.yAxis.scale(this.state.yScale);
    d3.select(this.refs.yAxis).call(this.yAxis);
  }

  render() {

    return (
      <div className="App">
        <svg height={height} width={width} style={{ margin: 15 }}>
          <g ref="xAxis" transform={`translate(0, ${height - margin.bottom})`} />
          <g ref="yAxis" transform={`translate(${margin.left}, 0)`} />
          <rect
            width={width - (margin.left + margin.right)}
            height={height - (margin.top + margin.bottom)}
            x={margin.left}
            y={margin.top}
            fill="#dddddd"
            stroke="#aaa"
          />
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

export default TemperatureChartD3Axis;
