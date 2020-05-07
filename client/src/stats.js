import React, { useState, PureComponent } from 'react';
import {
  ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend,
} from 'recharts';
import './App.css';

let allData = []
const aveWage = 13.30;

class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/9xopwa9v/';  

  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }


  getData(){
    setTimeout(() => {
      const graphData = getGdata(allData);
      this.setState({
        data: graphData
      })
    }, 5000)
    console.log(this.state.data)
  }

  componentDidMount(){
    this.getData();
  }


  render() {
    return (
      <ComposedChart
        width={800}
        height={500}
        data={this.state.data}
        margin={{
          top: 10, right: 10, bottom: 10, left: 10,
        }}
      >
        <CartesianGrid stroke="#ffffff" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="amt" fill="lightblue" stroke="#8884d8" />
        <Bar dataKey="RequestBar" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="RequestLine" stroke="yellow" />
      </ComposedChart>
    );
  }
}

function getGdata(arr){
  const uniqueStoreNums = [...new Set(arr.map(x => x.storenum))];
  console.log(uniqueStoreNums);

  for(let i = 0; i < arr.length; i++){
    console.log("store num: " + uniqueStoreNums[i] + " amount: " + arr.filter(x => x.storenum === uniqueStoreNums[i]).length)
  }

  const st1 = arr.filter(x => x.storenum === 1).length
  const st2 = arr.filter(x => x.storenum === 2).length
  const st3 = arr.filter(x => x.storenum === 3).length
  const st4 = arr.filter(x => x.storenum === 4).length
  const st5 = arr.filter(x => x.storenum === 5).length
  const st6 = arr.filter(x => x.storenum === 6).length
  const st7 = arr.filter(x => x.storenum === 7).length
  const st8 = arr.filter(x => x.storenum === 8).length
  const st9 = arr.filter(x => x.storenum === 9).length
  const st10 = arr.filter(x => x.storenum === 10).length
  const st11 = arr.filter(x => x.storenum === 11).length
  const st12 = arr.filter(x => x.storenum === 12).length
  const st13 = arr.filter(x => x.storenum === 13).length
  const st14 = arr.filter(x => x.storenum === 14).length
  const st15 = arr.filter(x => x.storenum === 15).length
  const st19 = arr.filter(x => x.storenum === 19).length
  const st20 = arr.filter(x => x.storenum === 20).length
  const st21 = arr.filter(x => x.storenum === 21).length
  const st22 = arr.filter(x => x.storenum === 22).length

  const graphData = [
  {
    name: '1', RequestLine: st1, RequestBar: st1, amt: st1,
  },
  {
    name: '2', RequestLine: st2, RequestBar: st2, amt: st2,
  },
  {
    name: '3', RequestLine: st3, RequestBar: st3, amt: st3,
  },
  {
    name: '4', RequestLine: st4, RequestBar: st4, amt: st4,
  },
  {
    name: '5', RequestLine: st5, RequestBar: st5, amt: st5,
  },
  {
    name: '6', RequestLine: st6, RequestBar: st6, amt: st6,
  },
  {
    name: '7', RequestLine: st7, RequestBar: st7, amt: st7,
  },
  {
    name: '8', RequestLine: st8, RequestBar: st8, amt: st8,
  },
  {
    name: '9', RequestLine: st9, RequestBar: st9, amt: st9,
  },
  {
    name: '10', RequestLine: st10, RequestBar: st10, amt: st10,
  },
  {
    name: '11', RequestLine: st11, RequestBar: st11, amt: st11,
  },
  {
    name: '12', RequestLine: st12, RequestBar: st12, amt: st12,
  },
  {
    name: '13', RequestLine: st13, RequestBar: st13, amt: st13,
  },
  {
    name: '14', RequestLine: st14, RequestBar: st14, amt: st14,
  },
  {
    name: '15', RequestLine: st15, RequestBar: st15, amt: st15,
  },
  {
    name: '19', RequestLine: st19, RequestBar: st19, amt: st19,
  },
  {
    name: '20', RequestLine: st20, RequestBar: st20, amt: st20,
  },
  {
    name: '21', RequestLine: st21, RequestBar: st21, amt: st21,
  },
  {
    name: '22', RequestLine: st22, RequestBar: st22, amt: st22,
  },
  ]
  console.log(graphData);
  
  return graphData;
}

function Stats() {

  const [totRequests, setValue] = useState(0);

  async function getRequests(){
    const numRequests = await fetch('/users');
    const results = await numRequests.json();
    allData = results;
    setValue(results.length);
    return results.length;
  }

  getRequests();

  return (
      <div className="App">
        <header className="App-header">
          <img src="LcDelivery.png" className="App-logo" alt="logo" />
          <h2 onLoad={() => setValue(getRequests())}>Total number of requests: {totRequests}</h2>
        </header>
        <div className="App-header">
          Sick Time Requests Per Store
          <Example/>
        </div>
      </div>
    );
  }

  export default Stats;
