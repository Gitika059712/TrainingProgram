import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      input:'',
      previousValue:'',
      currentValue:''
    }
    this.clickBtn = this.clickBtn.bind(this);
  
  }
  clickBtn= (value)=>{
   this.setState({
   input:this.state.input+ value

   });
   var inputTxt = this.state.input + value;
   document.getElementById("inputdemo").value = inputTxt;
   
    }
    equals(){
      var result = eval(this.state.input);
      document.getElementById("inputdemo").value = result;
      this.setState({
        input:result

      })
     
    }
    clrBtn(){
      document.getElementById("inputdemo").value= "";
      //this.state.value = "";
      this.setState({
        input:""
      })
    }
   

   render(){

    return (
    <div className="App">
      <div className="calc-container">
        <input type="text" id = "inputdemo" className="input" onChange= {this.clickBtn}></input>
        <div className="row">
        <button className="btn" value ="1" onClick = {()=> {this.clickBtn(1)}} >1</button>
        <button className="btn" value ="2" onClick = {()=> {this.clickBtn(2)}} >2</button>
        <button className="btn" value ="3" onClick = {()=> {this.clickBtn(3)}} >3</button>
        <button className="btn" value ="/" onClick = {()=> {this.clickBtn('/')}} > /</button>
        </div>
        <div className="row">
        <button className="btn"  value ="4" onClick = {()=> {this.clickBtn(4)}}  >4</button>
        <button className="btn"  value ="5" onClick = {()=> {this.clickBtn(5)}}  >5</button>
        <button className="btn"  value ="6" onClick = {()=> {this.clickBtn(6)}}  >6</button>
        <button className="btn"  value ="*" onClick = {()=> {this.clickBtn('*')}}  >*</button>
        </div>
        <div className="row">
        <button className="btn"  value ="7" onClick = {()=> {this.clickBtn(7)}}  >7</button>
        <button className="btn"  value ="8" onClick = {()=> {this.clickBtn(8)}}  >8</button>
        <button className="btn"  value ="9" onClick = {()=> {this.clickBtn(9)}}  >9</button>
        <button className="btn"  value ="-" onClick = {()=> {this.clickBtn('-')}}  >-</button>
        </div>
        <div className="row">
        <button className="btn"  value ="=" onClick = {()=> {this.equals()}}  >=</button>
        <button className="btn"  value ="0" onClick = {()=> {this.clickBtn(0)}}    >0</button>
        <button className="btn"  value ="." onClick = {()=> {this.clickBtn('.')}}  >.</button>
        <button className="btn"  value ="+" onClick = {()=> {this.clickBtn('+')}}  >+</button>
        </div>
        <button className="clr" value = " " onClick = {()=> {this.clrBtn(" ")}}>Clear</button>

      </div>
    </div>
    
  );
    }
  

}

export default App;
