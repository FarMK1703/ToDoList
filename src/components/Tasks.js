import React from 'react'
import done_logo from '../static/done.svg'

export default function Tasks(props) {
   
   
 

  return (
    <div className='Tasks'>
      <ul>
        {props.userTasks.map((item,index)=>{
            return(
              <li 
              className={item.isDone?'isDone':null}
              style={item.isDone?{backgroundColor:'greenyellow'}:{backgroundColor:'#fca311'}}
              key={index}>{item.task}
             
                <img style={item.isDone?{top:'10%'}:null} onClick={()=>{props.taskDone(index)}}  alt="#" src={done_logo}/>
             </li>
            )
           
        })}
      </ul>
    </div>
  )
}
