import{React,useRef,useState} from "react";
import './App.css';

function App() {
  let[state,setstate]=useState(0)
  const timer=useRef(null);
  const startButton=()=>{
    timer.current=setInterval(()=>{setstate((state)=>state+1)},1000)
  };
  const pauseButton=()=>{
    clearInterval(timer.current)
  }
  const Reset=()=>{
    setstate(0)
  }

  return (
    <div className="container">
      <h1 className="head">{state}</h1>
      <div>
      <button type="button" className="start" onClick={startButton}>Start</button>
      <button type="button"  className="pause" onClick={pauseButton}>Pause</button>
      <button type="button" className="reset" onClick={Reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
