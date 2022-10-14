import React, {useState} from 'react'
import BtnComponents from './Componens/BtnComponents';
import Display from './Componens/Display';
import 'bootstrap/dist/css/bootstrap.min.css';
import Clock from './Componens/Clock';
import './App.css';

function App() {
  const [time, setTime] = useState({ms: 0, s: 0, m: 0, h: 0})
  const [interv, setInterv] = useState()
  const [status, setStatus] = useState(0)

  const start = ()=>{
    run();
    setStatus(1)
    setInterv(setInterval(run, 10))
  }

  let updateMs = time.ms, updateS = time.s, updateM = time.m, updateH = time.h;

  const run = () => {
    if(updateM === 60){
      updateH++
      updateM = 0;
    }
    if(updateS === 60){
      updateM++
      updateS = 0;
    }
    if(updateMs === 100){
      updateS++
      updateMs = 0;
    }
    updateMs++
    return setTime({ms: updateMs, s: updateS, m: updateM, h: updateH})
  }

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ms:0, s:0, m:0, h:0})
  };

  const resume = () => start();

  
  return (
    <div className="main-section">
        <div className="clock-holder">
          <div className="stopwatch">
          <Clock />
            <Display time={time} />
            <BtnComponents start={start} status={status} resume={resume} reset={reset} stop={stop} />
          </div>
        </div>
    </div>
  );
}

export default App;
