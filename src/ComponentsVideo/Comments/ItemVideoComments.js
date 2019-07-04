import React from 'react'
import './ItemVideoComments.css'
const ItemsComments = ({comments})=>{
    const {imageURL,nombre,comentario} = comments
    return(
        
        <div className="ItemVideoComments">
            
            <img width={50} src={imageURL} alt=""/>
            <div id="comments">
                <h5>{nombre}</h5>
                <p>{comentario}</p>
            </div>
        </div>

    )
}

export default ItemsComments