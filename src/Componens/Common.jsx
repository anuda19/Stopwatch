import React, {useState} from 'react'
import Clock from './Clock'
import Display from './Display'
import SavedTask from './SavedTask'
import BtnComponents from './BtnComponents'
import TaskModal from './TaskModal'



function App() {
  const [time, setTime] = useState({ms: 0, s: 0, m: 0, h: 0})
  const [interv, setInterv] = useState()
  const [status, setStatus] = useState(0)
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [tasks, setTasks] = useState([])

  const handleSaveModal = () => {
    showModal ? setShowModal(false) : setShowModal(true);
  };

  const idx = new Date().getSeconds()
  const handleSaveTask = ()=>{
    setTasks([...tasks, {title, desc, idx}])
    setTitle('')
    setDesc('')
    setShowModal(false)
  }
  const handleDelete = (index)=>{
    console.log("clicked",index);
    const newTasks = tasks.filter((x)=>{
      return x.idx !== index
    })
    setTasks(newTasks)
}

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
            <BtnComponents start={start} status={status} resume={resume} reset={reset} stop={stop} handleSaveModal={handleSaveModal}/>
          </div>
        </div>
        <SavedTask tasks={tasks} handleDelete={handleDelete}/>
        <TaskModal
        showModal={showModal}
        setShowModal={setShowModal}
        title={title}
        setTitle={setTitle}
        desc={desc}
        setDesc={setDesc}
        handleSaveTask={handleSaveTask}
      />
    </div>
  );
}

export default App;
