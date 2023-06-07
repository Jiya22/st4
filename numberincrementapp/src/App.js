import React,{useState} from 'react';
import './App.css';

function App() {
  const [count,setCount] = useState(0);
  return (
    <div className="App">
      <button className="btn btn-success" onClick={()=>setCount(count+1)}>+</button>
      <div className='counterDisplay'>{count}</div>
      <button className="btn btn-danger" onClick={()=>setCount(count-1)}>-</button>
      <p>{(count%2===0)? "Even" : "Odd"}</p>
    </div>
  );
}

export default App;