import React, { Component } from 'react'
import Tasks from './Tasks'

export class ToDoList extends Component {
  constructor(props){
    super(props)
    this.state={
        userInput:"",
        userTasks:[],
        isEmpty:false
    }
  }


  eventHendler=(event)=>{
   this.setState({userInput:event.target.value})
  }

  eventSubmit=(event)=>{
    event.preventDefault()
    if(this.state.userInput){
        const tasks=this.state.userTasks
        tasks.push(this.state.userInput)
        this.setState({userTasks: tasks})
        this.setState({userInput:''})
        
    }
    else{
        this.setState({isEmpty:true})
        alert("У Вас совсем нет целей?")
        setTimeout(()=>{
            this.setState({isEmpty:false})
        },4000)
        
    }

  }



  deleteTask=(index)=>{
    console.log(index)
    
    
    this.setState((state)=>({
        userTasks:[...state.userTasks.splice(0,index),...state.userTasks.splice(index+1)]
    }))
  }

  render() {
   
    return (
     <div className='container'>
        <div className="ToDolist">
            <h1>Твой личный список дел</h1>
            <form onSubmit={this.eventSubmit}>
                <input style={this.state.isEmpty===true?{borderColor:'red'}:{borderColor:'#e5e5e5'}} onChange={this.eventHendler} value={this.state.userInput} placeholder='Добавьте новое задание...' type="text"></input>
                <button type='submit'>Добавить</button>
                
            </form>
            <Tasks remove={this.deleteTask} userTasks={this.state.userTasks} />
        </div>
     </div>
    )
  }
}

export default ToDoList