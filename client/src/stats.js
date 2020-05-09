import React, { useState, PureComponent } from 'react';
import {
  ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
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
        width={600}
        height={350}
        data={this.state.data}
        margin={{
          top: 1, right: 1, bottom: 1, left: 1,
        }}
      >
        <CartesianGrid stroke="#ffffff" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="amt" fill="lightblue" stroke="#8884d8" />
        <Bar dataKey="RB" barSize={15} fill="#413ea0" />
        <Line type="monotone" dataKey="RL" stroke="yellow" />
      </ComposedChart>
    );
  }
}

class RadarGraph extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/9xopwa9v/';  

  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }


  getData(){
    setTimeout(() => {
      const DaysData = getDaysData(allData);
      this.setState({
        data: DaysData
      })
    }, 7000)
    console.log(this.state.data)
  }

  componentDidMount(){
    this.getData();
  }

  render() {
    return (
      <RadarChart cx={200} cy={200} outerRadius={200} width={400} height={400} data={this.state.data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" stroke="#ffffff" />
        <PolarRadiusAxis />
        <Radar name="LC" dataKey="A" stroke="#ffffff" fill="lightblue" fillOpacity={0.6} />
      </RadarChart>
    );
  }
}

class MonthlyCost extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/9xopwa9v/';  

  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }


  getData(){
    setTimeout(() => {
      const graphData = getMonthDataWithCost(allData);
      this.setState({
        data: graphData
      })
    }, 9000)
    console.log(this.state.data)
  }

  componentDidMount(){
    this.getData();
  }


  render() {
    return (
      <ComposedChart
        width={600}
        height={350}
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
        <Bar dataKey="costBar" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="costLine" stroke="yellow" />
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
    name: '1', RL: st1, RB: st1, amt: st1,
  },
  {
    name: '2', RL: st2, RB: st2, amt: st2,
  },
  {
    name: '3', RL: st3, RB: st3, amt: st3,
  },
  {
    name: '4', RL: st4, RB: st4, amt: st4,
  },
  {
    name: '5', RL: st5, RB: st5, amt: st5,
  },
  {
    name: '6', RL: st6, RB: st6, amt: st6,
  },
  {
    name: '7', RL: st7, RB: st7, amt: st7,
  },
  {
    name: '8', RL: st8, RB: st8, amt: st8,
  },
  {
    name: '9', RL: st9, RB: st9, amt: st9,
  },
  {
    name: '10', RL: st10, RB: st10, amt: st10,
  },
  {
    name: '11', RL: st11, RB: st11, amt: st11,
  },
  {
    name: '12', RL: st12, RB: st12, amt: st12,
  },
  {
    name: '13', RL: st13, RB: st13, amt: st13,
  },
  {
    name: '14', RL: st14, RB: st14, amt: st14,
  },
  {
    name: '15', RL: st15, RB: st15, amt: st15,
  },
  {
    name: '19', RL: st19, RB: st19, amt: st19,
  },
  {
    name: '20', RL: st20, RB: st20, amt: st20,
  },
  {
    name: '21', RL: st21, RB: st21, amt: st21,
  },
  {
    name: '22', RL: st22, RB: st22, amt: st22,
  },
  ]
  console.log(graphData);
  
  return graphData;
}

function getDaysData(arr){
  const mon = arr.filter(x => new Date(x.requestdate).getDay() === 1).length;
  const tue = arr.filter(x => new Date(x.requestdate).getDay() === 2).length;
  const wed = arr.filter(x => new Date(x.requestdate).getDay() === 3).length;
  const thur = arr.filter(x => new Date(x.requestdate).getDay() === 4).length;
  const fri = arr.filter(x => new Date(x.requestdate).getDay() === 5).length;
  const sat = arr.filter(x => new Date(x.requestdate).getDay() === 6).length;
  const sun = arr.filter(x => new Date(x.requestdate).getDay() === 0).length;

  const theDays = [mon, tue, wed, thur, fri, sat, sun];
  const sortedDays = theDays.sort(function(a,b){return b-a});
  const max = sortedDays[0] + 10;

  const daysData = [
    {
      subject: 'Mon', A: mon, fullMark: max,
    },
    {
      subject: 'Tue', A: tue, fullMark: max,
    },
    {
      subject: 'Wed', A: wed, fullMark: max,
    },
    {
      subject: 'Thur', A: thur, fullMark: max,
    },
    {
      subject: 'Fri', A: fri, fullMark: max,
    },
    {
      subject: 'Sat', A: sat, fullMark: max,
    },
    {
      subject: 'Sun', A: sun, fullMark: max,
    },
  ];

  return daysData;
}

function costReducer(arr){
  return arr.reduce((x,y) => x+y.hoursrequested,0)*13.30;
}

function getMonthDataWithCost(arr){
  const jan = arr.filter(x => x.requestdate.includes("-01-"));
  const feb = arr.filter(x => x.requestdate.includes("-02-"));
  const march = arr.filter(x => x.requestdate.includes("-03-"));
  const april = arr.filter(x => x.requestdate.includes("-04-"));
  const may = arr.filter(x => x.requestdate.includes("-05-"));
  const june = arr.filter(x => x.requestdate.includes("-06-"));
  const july = arr.filter(x => x.requestdate.includes("-07-"));
  const aug = arr.filter(x => x.requestdate.includes("-08-"));
  const sep = arr.filter(x => x.requestdate.includes("-09-"));
  const oct = arr.filter(x => x.requestdate.includes("-10-"));
  const nov = arr.filter(x => x.requestdate.includes("-11-"));
  const dec = arr.filter(x => x.requestdate.includes("-12-"));

  const janCost = costReducer(jan);
  const febCost = costReducer(feb);
  const marchCost = costReducer(march);
  const aprilCost = costReducer(april);
  const mayCost = costReducer(may);
  const juneCost = costReducer(june);
  const julyCost = costReducer(july);
  const augCost = costReducer(aug);
  const sepCost = costReducer(sep);
  const octCost = costReducer(oct);
  const novCost = costReducer(nov);
  const decCost = costReducer(dec);

  let currCostArr = [];
  let currCost = 0;
  let CostPerMonth = [janCost, febCost, marchCost, aprilCost, mayCost, juneCost, julyCost, augCost,
                    sepCost,octCost, novCost, decCost]

  for(let i = 0; i < CostPerMonth.length; i++){
    currCost = currCost + CostPerMonth[i];
    currCostArr.push(currCost);
  }

  const data = [
    {
      name: 'Jan', costLine: currCostArr[0], costBar: janCost, amt: currCostArr[0],
    },
    {
      name: 'Feb', costLine: currCostArr[1], costBar: febCost, amt: currCostArr[1],
    },
    {
      name: 'Mar', costLine: currCostArr[2], costBar: marchCost, amt: currCostArr[2],
    },
    {
      name: 'Apr', costLine: currCostArr[3], costBar: aprilCost, amt: currCostArr[3],
    },
    {
      name: 'May', costLine: currCostArr[4], costBar: mayCost, amt: currCostArr[4],
    },
    {
      name: 'Jun', costLine: currCostArr[5], costBar: juneCost, amt: currCostArr[5],
    },
    {
      name: 'Jul', costLine: currCostArr[6], costBar: julyCost, amt: currCostArr[6],
    },
    {
      name: 'Aug', costLine: currCostArr[7], costBar: augCost, amt: currCostArr[7],
    },
    {
      name: 'Sep', costLine: currCostArr[8], costBar: sepCost, amt: currCostArr[8],
    },
    {
      name: 'Oct', costLine: currCostArr[9], costBar: octCost, amt: currCostArr[9],
    },
    {
      name: 'Nov', costLine: currCostArr[10], costBar: novCost, amt: currCostArr[10],
    },
    {
      name: 'Dec', costLine: currCostArr[11], costBar: decCost, amt: currCostArr[11],
    },
  ]
    console.log(data);
    return data;
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
        <div className="App-header">
          Sick Time Requests Per Day Of The Week
          <RadarGraph/>
        </div>
        <div className="App-header">
          Sick Time Cost Per Month
          <MonthlyCost/>
        </div>
      </div>
    );
  }

  export default Stats;
