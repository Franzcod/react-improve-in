import React from 'react'
import s from "./band.module.css"


export default function Band(props) {

    // console.log("de Banda => ",props)
    let urlImage = props.band.image
    return (
        
            <div className={s.container}>
                <div className={s.image} style={{backgroundImage: `url(${urlImage})`}}></div>
                <div className={s.infoBand}>
                    <div className={s.name}>{props.band.name}</div>
                </div>
            </div>
        
        
    )
}
