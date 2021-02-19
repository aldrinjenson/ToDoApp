import React, { Component } from 'react'
import Todos from './components/Todos.jsx'
import AddTodo from './components/AddTodo.jsx'
import Search from './components/Search.jsx'
import Navbar from './components/Navbar'
import 'materialize-css/dist/css/materialize.min.css'

class App extends Component {

  state = {
    todoList: [
      { id: 0, title: "Play Sonic Dash", completed: false },
      { id: 1, title: "Get Cheese Pizza", completed: false },
      { id: 2, title: "Kick Mario's butt", completed: false },
    ],
    searchField: ''
  }

  addNew = (e) => {
    e.id = Math.random()
    const newTodoArray = [...this.state.todoList, e]
    this.setState({
      todoList: newTodoArray
    })
  }

  deleteTodo = (id) => {
    const newList = this.state.todoList.filter(x => {
      return x.id !== id
    })
    this.setState({
      todoList: newList
    })
  }

  Search = (letters) => {
    this.setState({
      searchField: letters
    })
  }

  handleClick = id => {
    const newList = this.state.todoList.map(todo => {
      if (todo.id === id) return { ...todo, completed: !todo.completed }
      else return todo
    })
    this.setState({ todoList: newList })
  }

  render() {

    const todoList = this.state.todoList.filter(todo => {
      return todo.title.toLowerCase().includes(this.state.searchField.toLowerCase())
    })

    return (
      <div className='App' style={{ marginBottom: '7vh' }} >
        <Navbar />
        <div className="container">
          <h1 className='center'>TodoApp</h1>
          <Search Search={this.Search} />
          <Todos todos={todoList} onClick={this.handleClick} deleteTodo={this.deleteTodo} />
          <AddTodo addNew={this.addNew} />
        </div>
      </div>
    )
  }
}

export default App
