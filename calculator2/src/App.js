import React, { Component } from 'react';
import './App.css';
import Button from './components/Button'
import Input from './components/Input'
import ClearBtn from './components/ClearBtn';

class  App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       input:'',
       prevoiusNo:'',
       currentNo:'',
       
    }
  
  }
  addToInput=val=>{
    this.setState({input:this.state.input+val});
  }
 
  
  evaluate=()=>{
    var result = eval(this.state.input);
    document.getElementById("inputdemo").value = result;
    this.setState({
      input:result

    })
  }
  clearInput=()=>{this.setState({input:" "});
  }

  render(){
  return (
    <div className="App">
     <div className = "calc-container">
     <div className="row">
     <Input id="inputdemo" className="input">{this.state.input}</Input>
     </div>
     <div className="row">
     <Button handleClick={this.addToInput} value={1}>1</Button>
     <Button handleClick={this.addToInput} value={2}>2</Button>
     <Button handleClick={this.addToInput} value={3}>3</Button>
     <Button handleClick={this.addToInput} value={"/"} >/</Button>
     </div>
     <div className="row">
     <Button handleClick={this.addToInput} value={4}>4</Button>
     <Button handleClick={this.addToInput} value={5} >5</Button>
     <Button handleClick={this.addToInput} value={6}>6</Button>
     <Button handleClick={this.addToInput} value={"*"}>*</Button>
     </div>
     <div className="row">
     <Button handleClick={this.addToInput} value={7}>7</Button>
     <Button handleClick={this.addToInput} value={8}>8</Button>
     <Button handleClick={this.addToInput} value={9}>9</Button>
     <Button handleClick={this.addToInput} value={"-"} >-</Button>
     </div>
     <div className="row">
     <Button handleClick={this.evaluate} >=</Button>
     <Button handleClick={this.addToInput} value={0}>0</Button>
     <Button handleClick={this.addToInput} value={"."}>.</Button>
     <Button handleClick={this.addToInput} value={"+"}>+</Button>
     </div>
     <div className="row">
     <ClearBtn handleClick={this.clearInput}>Clear</ClearBtn>
     </div>
    </div>
    </div>
  );
}
}
export default App;
