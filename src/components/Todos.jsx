import React from 'react'

const Todos = (props) => {
    const count = props.list.length
    const displayList = props.list.map(x=>{
        return(
            <li className="collection-item" key={x.id}>
                {x.todo}
                <div onClick={()=>{props.deleteTodo(x.id)}} className="secondary-content indigo lighten-2 btn-small">
                    <i className="material-icons">done</i>
                </div>
            </li>
        )
    })
    
    return (
        <div>
            <p>You have {count} todos</p>
            <ul className="collection">
                {displayList}
            </ul>
            
        </div>
    )
}

export default Todos
