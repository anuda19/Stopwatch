import React from 'react'

function BtnComponents(props) {
  return (
    <div className='my-3'>
    {(props.status === 0) ? 
        <button className='btn btn-primary' onClick={props.start}>Start</button> : ""
    }
        {(props.status === 1) ? 
            <div>
            <button className='btn btn-primary' onClick={props.stop}>Pause</button>
            <button className='btn btn-primary' onClick={props.reset}>Reset</button> 
            </div> : ""
        }

        {(props.status === 2)? 
        <div>
          <button className="btn btn-primary"
                  onClick={props.resume}>Resume</button>
          <button className="btn btn-primary"
                  onClick={props.reset}>Reset</button>
        </div> : ""
      }
    </div>
  )
}

export default BtnComponents