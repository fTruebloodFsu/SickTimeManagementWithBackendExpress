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
  const d = new Date();
  const year = d.getFullYear();
  
  const currYear = arr.filter(x => x.requestdate.includes(year));
  
  const uniqueStores = [...new Set(currYear.map(x => x.storenum))];
  const sortedUniqueStores = uniqueStores.sort(function(a,b){return a-b});
  
  let graphData = [];

  for(let i = 0; i < sortedUniqueStores.length; i++){

    let currStoreAmount = arr.filter(x => x.storenum === sortedUniqueStores[i]).length;

    let currStore = {"name": sortedUniqueStores[i], "RL": currStoreAmount, "RB": currStoreAmount, "amt": currStoreAmount}
    graphData.push(currStore);
  }
  
  
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
