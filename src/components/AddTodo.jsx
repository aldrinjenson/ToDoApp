import React, { Component } from 'react'

class AddTodo extends Component {
    state = {
        title: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.title !== '')
            this.props.addNew(this.state)
        this.setState({
            title: ''
        })
    }

    render() {
        return (
            <div className='container'>
                <h3 className="center-align">Add New Todo</h3>
                <form onSubmit={this.handleSubmit} className="input-field">
                    <input value={this.state.title} onChange={this.handleChange} type="text" id="title" />
                    <label htmlFor="new">Enter New Todo</label>
                    <button type='submit' className="btn indigo center lighten-1">
                        <span>Add</span>
                        <i className="material-icons indigo-text text-darken-4 right">done</i>
                    </button>
                </form>
            </div>
        )
    }
}

export default AddTodo
