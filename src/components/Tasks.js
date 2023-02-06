import React from 'react'
import done_logo from '../static/done.svg'

export default function Tasks(props) {
   
   
 

  return (
    <div className='Tasks'>
      <ul>
        {props.userTasks.map((item,index)=>{
            return <li key={index}>{item}<img onClick={()=>{props.remove(index)}}  alt="#" src={done_logo}></img></li>
        })}
      </ul>
    </div>
  )
}
