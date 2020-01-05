import React, { Component } from 'react'
import Todos from './components/Todos.jsx'
import AddTodo from './components/AddTodo.jsx'
import Search from './components/Search.jsx'
import Navbar from './components/Navbar'

class App extends Component {

  state = {
    todolist:[
      {id:0,todo:"Wash Towel"},
      {id:1,todo:"Eat medicine"},
      {id:2,todo:"Complete React Practice"},
    ],
    searchField:''
  }

  addNew = (e) => {
    e.id = Math.random()
    const newTodoArray = [...this.state.todolist,e]
    this.setState({
      todolist:newTodoArray
    })
  }

  deleteTodo = (id) =>{
    const newList = this.state.todolist.filter(x=>{
      return x.id !== id
    })
    this.setState({
      todolist:newList
    })
  }

  Search = (letters) => {
    this.setState({
      searchField:letters
    })
  }

  render(){

    const todolist = this.state.todolist.filter(x=>{
      return x.todo.toLowerCase().includes(this.state.searchField.toLowerCase())
    })

    return(
      <div className='App'>
        <Navbar/>
        <div className="container">
          <h1 className='center'>TodoApp</h1>
          <Search Search={this.Search}/>
          <Todos list={todolist} deleteTodo={this.deleteTodo}/>      
          <AddTodo addNew={this.addNew}/>
        </div>
      </div>
    )
  }
}

export default App
