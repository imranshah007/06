import './App.css';
import Toggle from './Components/Toggle';
import { useState } from 'react';
import {useRef} from 'react';


function App() {
  const[initial, setInitialState] = useState(true);
  const ref = useRef();

  const backgroundChange = _ =>{
    if(initial === true){
      setInitialState(false);
    }else{
      setInitialState(true);
    }
  }

  return (
    <div className={initial=== true ? "App" : "App change" } ref={ref}>
      <div className='overreacted' >
        <h1>Overreacted</h1>
   <button onClick={backgroundChange}  className={initial === true ? " " : "buttonchange"} >Toogle</button>
     </div>
     <Toggle />
      </div>
  );
}

export default App;

