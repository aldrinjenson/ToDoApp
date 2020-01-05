import React, { Component } from 'react'
// // eslint-disable-next-line
// import M from 'materialize-css'

class AddTodo extends Component {
    state = {
        todo:''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.todo!=='')
            this.props.addNew(this.state)
        this.setState({
            todo:''
        })
    }

    render() {
        return (
            <div className='container'>
                <h3 className="center-align">Add New Todo</h3>
                <form onSubmit={this.handleSubmit} className="input-field">
                    <input value ={this.state.todo} onChange={this.handleChange} type="text" id="todo"/>
                    <label htmlFor="new">Enter New Todo</label>
                    <button type='submit' className="btn indigo center lighten-1">
                        <span>Submit</span>
                        <i className="material-icons indigo-text text-darken-4 right">done</i>
                    </button>
                </form>
            </div>
        )
    }
}

export default AddTodo
