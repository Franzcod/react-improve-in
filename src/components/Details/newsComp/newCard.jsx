import React from 'react'
import s from "./newsCard.module.css"

export default function NewsCard(props) {

    // console.log(props.data)

    return (
        <a className={s.container} href={`${props.data.link}` } target="_blank" rel="noreferrer nofollow">
  
            <div className={s.img} 
                style={{
                    backgroundImage: props.data.media
                    ? `url(${props.data.media})`
                    : "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR18o8tOWwNUUrxCO37xbnJiZPVlaLF2Pl5VA&usqp=CAU')"    
                }}
            
            
            >
                
            </div>
            <div className={s.title}>{props.data.title}</div>
            <div>{props.data.published_date}</div>
            <div>{props.data.summary}</div>
        </a>
    )
}
