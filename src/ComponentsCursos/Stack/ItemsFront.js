import React from'react'



const ItemsFront = ({ front }) => {
    const { nombre, imageURL } = front;
    return (
      
       <div className="List">
         
         <a href="https://www.google.com" target="_blank" rel='noreferrer noopener' > <img id="img" src={imageURL} alt="Imagen" /></a> 
         <h3><a href="https://www.google.com" target="_blank" rel='noreferrer noopener' >{nombre}</a></h3>
       </div>
       
      
    )
  }
export default ItemsFront