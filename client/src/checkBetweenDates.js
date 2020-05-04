import React from 'react';
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

function validate(begin, end) {
    return {
      BeginDate: begin.length === 0,
      EndDate: end.length === 0,
    };
  }

function allFalse(obj){
    let result = true;

    if(obj.BeginDate === true) result = false;
    if(obj.EndDate === true) result = false;

    return result;
}

async function getRequestsBetween(begin, end){
    const data = {
        begindate: begin,
        enddate: end,
    };

    const numRequests = await fetch('/getRequestsBetweenDates', {method:"POST", body: JSON.stringify(data), 
                                    headers: {"content-type": "application/json"}});
    const results = await numRequests.json();
    console.log(results[0]);
    displayResultsReact(results)
    return results.length;
}

function displayResultsReact(arr){

    let resultList = document.getElementById("checkResults");

    for(let i = 0; i < arr.length; i++){
        
        let currEle = arr[i];
        let newDiv = document.createElement("div");
        newDiv.id = currEle.id;

        newDiv.style.border = "solid white 1px"
        newDiv.style.borderRadius = "5px"
        newDiv.style.margin = "2px"
        newDiv.style.width = "50vw"
        newDiv.style.paddingLeft = "5px"
        newDiv.style.alignContent = "center"

        newDiv.innerHTML = "";
        let x = i + 1;
        newDiv.innerHTML += x + ". " + currEle.firstname + " " + currEle.lastname + " used " + 
                            currEle.hoursrequested + " hours on " + currEle.requestdate;

        resultList.appendChild(newDiv)
    }
}

class MyFormCheckBetween extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        BeginDate: '',
        EndDate: '',
      };
    }

    myChangeHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;

      this.setState({[nam]: val});
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        const errorsSub = validate(this.state.BeginDate, this.state.EndDate);
        
        if(allFalse(errorsSub)){
            alert("no errors")
            getRequestsBetween(this.state.BeginDate, this.state.EndDate);
        }
    }

    errorMessage = (event) => {
        event.preventDefault();
        alert("Errors Detected")
    }

    render() {
    const errors = validate(this.state.BeginDate, this.state.EndDate);
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

  export default MyFormCheckBetween;