import React, { Component } from 'react';
import * as d3 from "d3";
import './App.css';

const margin = { top: 10, right: 10, bottom: 10, left: 10 };
const height = 400;
const width = 400;

class TwitterChart extends Component {

  state = {
    text: '',
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { data } = nextProps;
    if (!data) return {};

    const xExtent = d3.extent(data, d => d.replies);
    const xScale = d3.scaleLinear()
      .domain(xExtent)
      .range([margin.left, width - margin.right]);

    const yExtent = d3.extent(data, d => d.likes);
    const yScale = d3.scaleLinear()
      .domain(yExtent)
      .range([height - margin.bottom, margin.top]);

    const points = data.map((d) => {
      return {
        x: xScale(d.replies),
        y: yScale(d.likes),
        text: d.text,
        likes: d.likes,
        replies: d.replies,
        retweets: d.retweets,
        tweetId: d.tweetId,
       }
    });

    return { points, xScale, yScale };
  }

  render() {
    return (
      <div className="App">
        <div style={{width: width, marginLeft: margin.left}}>
          <svg height={height} width={width} style={{ margin: 5 }}>
            <rect
              width={width - (margin.left + margin.right)}
              height={height - (margin.top + margin.bottom)}
              x={margin.left}
              y={margin.top}
              fill="#dddddd"
              stroke="#aaa"
            />
            {
              this.state.points.map((d) => {
                return (
                  <circle fill="blue" key={d.date} cx={d.x} cy={d.y} opacity={0.6} r={6} onClick={() =>
                    this.setState({
                      text: d.text,
                      details: `Likes: ${d.likes}, Replies: ${d.replies}, Retweets: ${d.retweets}`,
                      tweetUrl: `https://twitter.com/RudyGiuliani/status/${d.tweetId}`
                    })
                  }/>
                )
              })
            }
          </svg>
          <p>
          {this.state.text}<br />
          <em>{this.state.details}</em>
          {this.state.tweetUrl ? <a href={this.state.tweetUrl}><img style={{verticalAlign: 'middle', margin: 10, width: 25}} alt="link to Tweet" src="/twitter_circle-128.png" /></a> : ''}
          </p>
        </div>
      </div>
    );
  }
}

export default TwitterChart;
