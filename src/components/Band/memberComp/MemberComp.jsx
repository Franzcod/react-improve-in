import React from 'react'
import s from "./memberComp.module.css"
import { IoPersonCircle } from "react-icons/io5";
// import {Link} from "react-router-dom"

export default function MemberComp({member}) {


    return (
        <a className={s.cont} href={`https://es.wikipedia.org/wiki/${member}` } target="_blank" rel="noreferrer nofollow">
       
            <div className={s.img}><IoPersonCircle/></div>
            <div className={s.name}>{member}</div>
        
        </a>
    )
}
