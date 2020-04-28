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

function validate(firstName, lastName, storeNum) {
    // true means invalid, so our conditions got reversed
    return {
      FirstName: firstName.length === 0,
      LastName: lastName.length === 0,
      StoreNumber: !Number(storeNum),
    };
  }

  function allFalse(obj){
    let result = true;
    if(obj.FirstName === true) result = false;
    if(obj.LastName === true) result = false;
    if(obj.StoreNumber === true) result = false;

    return result;
}

async function getRequests(fn, ln, sn){
    const data = {
        firstname: fn,
        lastname: ln,
        storenum: sn
    };

    const numRequests = await fetch('/getUserByName', {method:"POST", body: JSON.stringify(data), 
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


  class MyFormCheck extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        FirstName: '',
        LastName: '',
        StoreNumber: '',
      };
    }

    myChangeHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;

      this.setState({[nam]: val});
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        const errorsSub = validate(this.state.FirstName, this.state.LastName, this.state.StoreNumber);
        
        if(allFalse(errorsSub)){
            //alert("no errors")
            getRequests(this.state.FirstName.trim().toUpperCase(), 
            this.state.LastName.trim().toUpperCase(), this.state.StoreNumber.trim().toUpperCase());
        }
    }

    errorMessage = (event) => {
        event.preventDefault();
        alert("Errors Detected")
    }

    render() {
    const errors = validate(this.state.FirstName, this.state.LastName, this.state.StoreNumber);
      return (
        <div>
            <form style={formStyle}>
            <Container>
                <Row>
                    <Col xs = {12}>
                        <h2>Employee: {this.state.FirstName} {this.state.LastName}</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs = {12}>
                        <h2>Store number: {this.state.StoreNumber}</h2>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col xs = {4}>
                        <p>First name:</p>
                    </Col>
                    <Col xs col = {6}>
                        <input
                        className={errors.FirstName ? "error" : "success"}
                        type='text'
                        name='FirstName'
                        placeholder='Quenten'
                        value={this.state.FirstName}
                        onChange={this.myChangeHandler}
                    />
                    <div>
                        {errors.FirstName ? <p className="errorMessage">*Please Enter A First Name</p> : <p></p>}
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs = {4}>
                        <p>Last name:</p>
                    </Col>
                    <Col xs col = {6}>
                        <input
                        className={errors.LastName ? "error" : "success"}
                        type='text'
                        name='LastName'
                        placeholder='Hicks'
                        value={this.state.LastName}
                        onChange={this.myChangeHandler}
                        />
                        <div>
                        {errors.LastName ? <p className="errorMessage">*Please Enter A Last Name</p> : <p></p>}
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs = {4}>
                        <p>Store number:</p>
                    </Col>
                    <Col xs = {6}> 
                        <input
                        className={errors.StoreNumber ? "error" : "success"}
                        type='text'
                        name='StoreNumber'
                        placeholder='3'
                        value={this.state.StoreNumber}
                        onChange={this.myChangeHandler}
                        />
                        <div>
                        {errors.StoreNumber ? <p className="errorMessage">*Please Enter A Store Number</p> : <p></p>}
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

  export default MyFormCheck;
