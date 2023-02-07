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
        tasks.push({
          task:this.state.userInput,
          isDone:false
        })
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



  taskDone=(index)=>{
    console.log(index)
    const tasks=this.state.userTasks
    tasks[index].isDone=true
    this.setState({userTasks:tasks})
    
  }


  clear=()=>{
     this.setState({userTasks:[]})
  }

  render() {
   
    return (
     <div className='container'>
        <div className="ToDolist">
            <h1>Твой личный список дел</h1>
            <form onSubmit={this.eventSubmit}>
                <input style={this.state.isEmpty===true?{borderColor:'red'}:{borderColor:'#e5e5e5'}} onChange={this.eventHendler} value={this.state.userInput} placeholder='Добавьте новое задание...' type="text"></input>
                <button className='btn' type='submit'>Добавить</button>
                
            </form>
            <Tasks taskDone={this.taskDone} userTasks={this.state.userTasks} />
            <button onClick={this.clear} className='btn'>Очистить</button>
        </div>
        
     </div>
    )
  }
}

export default ToDoList