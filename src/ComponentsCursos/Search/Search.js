import React, {Component} from 'react'
import './Search.css'
class Search extends Component{
  
    render(){
        return(
            
            <form className="Search">
                <label>Buscar Videos</label>
                <input type="text" />
                <button id="botton">Buscar</button>
            </form>
            
        )
    }
}

export default Search