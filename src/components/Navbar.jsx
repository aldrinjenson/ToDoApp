import React,{Component} from 'react'
import M from 'materialize-css'

class Navbar extends Component{

    componentDidMount(){
        M.AutoInit()
    }
    
    render(){
        return (
            <nav className="nav-wrapper indigo">
                <div className="container">
                    <a href="#" className="sidenav-trigger" data-target='mobile-view'>
                        <i className="material-icons">menu</i>
                    </a>
                    <a href="#" className="brand-logo">Todos</a>
                    <ul className='right hide-on-med-and-down'>               
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contacts</a></li>
                    </ul>
                    <ul className='sidenav' id='mobile-view' >               
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contacts</a></li>
                    </ul>
                </div>
            </nav>
        )
    }    
}

export default Navbar
