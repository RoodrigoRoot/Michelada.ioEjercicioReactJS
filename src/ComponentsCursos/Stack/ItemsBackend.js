import React from'react'




const ItemsBack = ({ back}) => {
    const { nombre, imageURL } = back;
    return (
      
       <div className="List">
         
        <a  href="https://www.google.com" target="_blank" rel='noreferrer noopener' > <img id="img"  src={imageURL} alt="Imagen" /></a>
        <h3><a href="https://www.google.com" rel='noreferrer noopener' target="_blank" >{nombre}</a></h3>
       </div>
       
      
    )
  }
export default ItemsBack