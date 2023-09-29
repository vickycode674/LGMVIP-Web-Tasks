import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  //we are handling a react hook to store a values
  const [input,setInput]=useState("");
  const [result,setResult]=useState(0);

  //event handler
  const handler=e=>{
    setInput(e.target.value); 
  }
  
  return (
    <div className="App">

      <center>
        <h2>Calculator</h2>
        <input type="text" value={input} name="input" onChange={handler}/>
        <br/>
        <button onClick={()=>setResult(eval(input))}>Result</button>
        <h4>Result is: {result}</h4>

        {/* button journey  */}
      <button onClick={()=>setInput(input+'1')}>1</button>
      <button onClick={()=>setInput(input+'2')}>2</button>
      <button onClick={()=>setInput(input+'3')}>3</button>
      <button onClick={()=>setInput(input+'4')}>4</button>
      <button onClick={()=>setInput(input+'5')}>5</button>  <br/>

      <button onClick={()=>setInput(input+'6')}>6</button>
      <button onClick={()=>setInput(input+'7')}>7</button>
      <button onClick={()=>setInput(input+'8')}>8</button>
      <button onClick={()=>setInput(input+'9')}>9</button>
      <button onClick={()=>setInput(input+'0')}>0</button> <br/>

      <button onClick={()=>setInput(input+'+')}>+</button>
      <button onClick={()=>setInput(input+'-')}>-</button>
      <button onClick={()=>setInput(input+'*')}>*</button>
      <button onClick={()=>setInput(input+'/')}>/</button>
      <button onClick={()=>setInput('')}>Clr</button> <br/>



      </center>
    </div>
  );
}

export default App;
