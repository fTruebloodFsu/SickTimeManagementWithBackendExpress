import React, { useState, useEffect }  from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import './index.css';
import "react-datepicker/dist/react-datepicker.css";

const formStyle = {
    backgroundColor: '#212529', 
    color: 'white',
    display: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'fluid',
    hieght: '100vh'
}

function validate(begin, end, store) {
    return {
      BeginDate: begin.length === 0,
      EndDate: end.length === 0,
      StoreNum: store.length === 0,
    };
  }

function allFalse(obj){
    let result = true;

    if(obj.BeginDate === true) result = false;
    if(obj.EndDate === true) result = false;
    if(obj.StoreNum === true) result = false;

    return result;
}

async function getRequestsByStore(begin, end, store){
    const data = {
        begindate: begin,
        enddate: end,
        storenum: store,
    };

    const numRequests = await fetch('/getRequestsByStore', {method:"POST", body: JSON.stringify(data), 
                                    headers: {"content-type": "application/json"}});
    const results = await numRequests.json();
    displayResultsReact(results)
    return results;
}

function hoursReducer(arr){
    return arr.reduce((x,y) => x+y.hoursrequested,0);
  }

function displayResultsReact(arr){
    
    const uniqueNames = [...new Set(arr.map(x => (x.firstname + " " + x.lastname)))]
    let objOfNamesAndHours = [];

    for(let i = 0; i < uniqueNames.length; i++){
        let currLen = arr.filter(x => (x.firstname + " " + x.lastname) === uniqueNames[i]);
        let newEle = {"name": uniqueNames[i], "hours": hoursReducer(currLen)}
        objOfNamesAndHours.push(newEle);
      }

    console.log(objOfNamesAndHours)

    let resultList = document.getElementById("checkResults");

    for(let i = 0; i < objOfNamesAndHours.length; i++){
        
        let currEle = objOfNamesAndHours[i];
        let newDiv = document.createElement("div");
        newDiv.id = currEle.id;

        newDiv.style.border = "solid white 1px"
        newDiv.style.borderRadius = "5px"
        newDiv.style.margin = "2px"
        newDiv.style.width = "95vw"
        newDiv.style.paddingLeft = "5px"
        newDiv.style.alignContent = "center"

        newDiv.innerHTML = "";
        let x = i + 1;
        newDiv.innerHTML += x + ". " + currEle.name + " used " + currEle.hours + " hours";

        resultList.appendChild(newDiv)
    }
}

class ByStore extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        BeginDate: '',
        EndDate: '',
        StoreNum: '',
      };
    }

    myChangeHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;

      this.setState({[nam]: val});
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        const errorsSub = validate(this.state.BeginDate, this.state.EndDate, this.state.StoreNum);
        
        if(allFalse(errorsSub)){
            getRequestsByStore(this.state.BeginDate, this.state.EndDate, this.state.StoreNum);
        }
    }

    errorMessage = (event) => {
        event.preventDefault();
        //alert("Errors Detected")
    }

    render() {
    const errors = validate(this.state.BeginDate, this.state.EndDate, this.state.StoreNum);
      return (
        <div>
            <form style={formStyle}>
            <Container>
                <Row>
                    <Col xs = {12}>
                        <h2>Begin: {this.state.BeginDate} </h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs = {12}>
                        <h2>End: {this.state.EndDate}</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs = {12}>
                        <h2>Store Number: {this.state.StoreNum}</h2>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col xs = {4}>
                        <p>Begin Date:</p>
                    </Col>
                    <Col xs = {6}> 
                    <input
                    className={errors.BeginDate ? "error" : "success"}
                    type="date"
                    name="BeginDate"
                    id="BeginDate"
                    placeholder="date"
                    value={this.state.BeginDate || '03/30/2020'}
                    onChange={this.myChangeHandler}
                    />
                    <div>
                        {errors.BeginDate ? <p className="errorMessage">*Please Slecet A Date</p> : <p></p>}
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs = {4}>
                        <p>End Date:</p>
                    </Col>
                    <Col xs = {6}> 
                    <input
                    className={errors.EndDate ? "error" : "success"}
                    type="date"
                    name="EndDate"
                    id="EndDate"
                    placeholder="date"
                    value={this.state.EndDate || '03/30/2020'}
                    onChange={this.myChangeHandler}
                    />
                    <div>
                        {errors.EndDate ? <p className="errorMessage">*Please Slecet A Date</p> : <p></p>}
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs = {4}>
                        <p>Store Number:</p>
                    </Col>
                    <Col xs = {6}> 
                    <input
                    className={errors.StoreNum ? "error" : "success"}
                    type="text"
                    name="StoreNum"
                    id="StoreNum"
                    placeholder="1"
                    value={this.state.StoreNum}
                    onChange={this.myChangeHandler}
                    />
                    <div>
                        {errors.StoreNum ? <p className="errorMessage">*Please Enter a store</p> : <p></p>}
                    </div>
                    </Col>
                </Row>
                
                <br/>
                <Row>
                    <Col xs = {4}>
                    </Col>
                    <Col xs = {6}>
                    {allFalse(errors) ?
                        <Button color='primary' onClick={this.mySubmitHandler}>Submit</Button> :
                        <Button color='warning' onClick={this.errorMessage}>Submit</Button>
                    }
                    </Col>
                </Row>
            </Container>
            <br></br>
            <div id="checkResults"></div>
            </form>
        </div>
      );
    }
  }

  export default ByStore;
