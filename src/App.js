import React from "react"
import './App.css';



class App extends React.Component {
  state= {
    input:"",
  };

  handleCount = (x)=> {
    if (x !== "=" && x !== "CE" && x !== "C") {
      this.setState({input: this.state.input + x})
  } else if (x === "=") {
      let k=eval(this.state.input)
      this.setState({input: k})
  }else if (x=== "CE"){
    this.setState({input: ""})
  }else if (x=== "C"){
    let s=this.state.input
    let str=s.substring(0, s.length - 1);
    this.setState({input: str})
  }
}  

  render(){
    return(
      <div>
        <div> {this.state.input}</div>
        <button onClick={()=> this.handleCount("CE")}>CE</button>
        <button onClick={()=> this.handleCount("C")}>C</button>
        <div>
          <button onClick={()=> this.handleCount(7)}>7</button>
          <button  onClick={()=> this.handleCount(8)}>8</button>
          <button onClick={()=> this.handleCount(9)}>9</button>
          <button onClick={()=> this.handleCount("/")}>/</button>

        </div>
        <div>
          <button onClick={()=> this.handleCount(4)}>4</button>
          <button  onClick={()=> this.handleCount(5)}>5</button>
          <button onClick={()=> this.handleCount(6)}>6</button>
          <button onClick={()=> this.handleCount("*")}>*</button>

        </div>
        <div>
        
          <button onClick={()=> this.handleCount(1)}>1</button>
          <button  onClick={()=> this.handleCount(2)}>2</button>
          <button onClick={()=> this.handleCount(3)}>3</button>
          <button onClick={()=> this.handleCount("-")}>-</button>
        </div>
        <div>
          <button onClick={()=> this.handleCount(0)}>0</button>
          <button onClick={()=> this.handleCount(".")}>.</button>
          <button onClick={()=> this.handleCount("=")}>=</button>
          <button onClick={()=> this.handleCount("+")}>+</button>
        </div>
      </div>

    );
  }
}
export default App;

