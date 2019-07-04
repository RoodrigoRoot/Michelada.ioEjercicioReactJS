import React from 'react'
import './ItemVideoSocials.css'

const ItemVideoSocials =({socials})=>{
    const { redsocial,idsocial } =socials
    return(
        <div className="socials">
            <p className="text-social">{redsocial}</p>
            <p className="text-social">  { `: ${idsocial} `} </p>
        </div>
    )
}

export default ItemVideoSocials