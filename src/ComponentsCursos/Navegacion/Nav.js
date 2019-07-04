import React, {Component} from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'

class Nav extends Component{
  
  
        
    
    render(){
        
        return(
            <header className="Navegacion">
        
          {
             <nav id="menu">
                 <Link to="/">Home</Link>
                 <Link to="">Secciones</Link>
                 <Link to="/videos">Agregar Videos</Link>
             </nav>
          }
        
      </header>
        )
    }

}
export default Nav