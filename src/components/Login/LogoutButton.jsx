import React from 'react'
import {useAuth0} from "@auth0/auth0-react"
import s from "./loginAuth0.module.css"

export default function LogoutAuth0() {

    const {logout} = useAuth0()

    return (
        <div className={s.cont}>
            <button className={s.buttonLogin} onClick={()=>{logout({returnTo: window.location.origin})}}>Logout</button>
        </div>
    )
}
