import React from 'react'
import s from "./nav.module.css"
import { SiBandsintown } from "react-icons/si";
import {Link} from "react-router-dom"
import LogoutAuth0 from '../Login/LogoutButton';
import {useAuth0} from "@auth0/auth0-react"

export default function Nav() {

    const {user, isAuthenticated, isLoading} = useAuth0();

    return (
        <div className={s.divRey}>
            <Link className={s.link} to={'/home'}>
                <div className={s.contIcon}>
                    <SiBandsintown/>
                    <div className={s.titleNav}>Improve In Challenge</div>
                </div>
            </Link>

            
            <div className={s.contBtn}>
                {
                    isLoading
                    ? <div>cargando</div>
                    : null
                }
                {
                    isAuthenticated
                    ? <div className={s.dataUser}>
                        <div className={s.dataUserA}>
                            <h4>{user.name}</h4>
                            <p>{user.email}</p>
                            <LogoutAuth0/>
                        </div>
                        <img src={user.picture} alt={user.name}/>
                    </div>
                    : null
                }
                
            </div>
        </div>
    )
}
