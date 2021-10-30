import React from 'react'
import {useAuth0} from "@auth0/auth0-react"
import s from "./loginAuth0.module.css"

export default function LoginAuth0() {

    const {loginWithRedirect} = useAuth0()

    return (
        <div className={s.cont}>
            <button className={s.buttonLogin} onClick={()=>{loginWithRedirect()}}>Login</button>
        </div>
    )
}
