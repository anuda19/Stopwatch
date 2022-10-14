import React, {useState} from 'react'

function Clock() {
    let time = new Date().toLocaleTimeString()
    const [currTime, setCurrTime] = useState(time)
    const updateTime =() => {
        let time = new Date().toLocaleTimeString()
        setCurrTime(time)
    }

    setInterval(updateTime, 1000)
  return (
    <div>
        <h1 className='text-center'>{currTime}</h1>
    </div>
  )
}

export default Clock