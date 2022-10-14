import React from 'react'
import {MdDelete} from 'react-icons/md'
import {FaEdit} from 'react-icons/fa'

const SavedTask = ({tasks, handleDelete}) => {
    
    const handleEdit = ()=>{

    }

   
    
  return (
    <div>
        {tasks.map((task)=>{
            return (
                <div className='tasks_main' key={task.idx}>
                <div className='text-light saved_tasks'>
                    <h4>{task.title}</h4>
                    <span className='tasks_icon' title='Delete' onClick={()=>handleDelete(task.idx)}><MdDelete/></span>
                </div>
                    <div className="text-light desc" >
                    <p>{task.desc}</p>
                    <span className='tasks_icon' title='Edit' onClick={handleEdit}><FaEdit/></span>
                    </div>
                    </div>
            )
        })}
    </div>
  )
}

export default SavedTask