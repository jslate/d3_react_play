import * as d3 from "d3";
import React, { Component } from 'react';

class Chart extends Component {
  render() {

    const data = [
      { date: new Date('1/1/2017'), value: 50 },
      { date: new Date('2/15/2017'), value: 45 },
      { date: new Date('3/15/2017'), value: 48 },
      { date: new Date('4/15/2017'), value: 52 },
      { date: new Date('6/15/2017'), value: 60 },
      { date: new Date('8/15/2017'), value: 65 },
      { date: new Date('9/15/2017'), value: 70 },
      { date: new Date('12/31/2017'), value: 72 },
    ]

    const width = 800;
    const height = 600;

    const xScale = d3.scaleTime()
      .domain([d3.min(data, (d) => d.date), d3.max(data, (d) => d.date)]) // input
      .range([0, width]); // output

    const yScale = d3.scaleLinear()
      .domain([d3.min(data, (d) => d.value), d3.max(data, (d) => d.value)])
      .range([height, 0]);

    return (
      <div>
        <svg width={width} height={height} style={{ backgroundColor: '#eee' }}>
            {
              data.map((d) => (
                <circle
                  fill="red"
                  key={d.date}
                  cx={xScale(d.date)}
                  cy={yScale(d.value)}
                  r={20} />
            ))
          }
        </svg>
      </div>
    )
  }
}

export default Chart;
