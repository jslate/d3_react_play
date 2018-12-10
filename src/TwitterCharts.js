import React, { Component } from 'react';
import './App.css';
import Rudy from './Rudy';
import Trump from './Trump';
import Hillary from './Hillary';
import Bernie from './Bernie';
import TwitterChart from './TwitterChart';

// If for some weird reason anyone ever wants to get more data, here's my hacky JS to do it.
// Just go to the appropriate Twitter page for a user and put this in your browser console:
//
// [...document.getElementsByClassName('stream-item-footer')].map((e) => {
//   const numbers = e.textContent.match(/[\d,]+/g)
//     .slice(0, 3)
//     .map((ns) => parseInt(ns.replace(/,/g, '')))
//   return [
//     e.parentElement.parentElement.getElementsByClassName('js-tweet-text-container')[0].textContent,
//     ...numbers,
//     e.parentElement.parentElement.dataset.tweetId,
//     e.parentElement.parentElement.dataset.retweetId,
//   ]
// }).map((arr) => {
//     return {
//         text: arr[0],
//         replies: arr[1],
//         retweets: arr[2],
//         likes: arr[3],
//         tweetId: arr[4],
//         retweetId: arr[5],
//     };
//   }).filter((e) => !e.retweetId).slice(0,100);


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
