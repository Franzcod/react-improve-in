/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect} from 'react'
import s from "./login.module.css"
// import {useDispatch, useSelector} from 'react-redux'
// import login from "./../../redux/actions" 
// import loginService from "../services/loginService"
import { useHistory } from 'react-router-dom'
import LoginAuth0 from './LoginAuth0';
import {useAuth0} from "@auth0/auth0-react"
import { SiBandsintown } from "react-icons/si";

export default function Login() {
  const history = useHistory()

  const { isAuthenticated} = useAuth0();

    useEffect(() => {
      if(isAuthenticated){
        history.push('/home')
      }
    })
 

    return (
      <div className={s.container}>
        <div className={s.contIcon}>
          <SiBandsintown/>
          <div className={s.titleNav}>Improve In Challenge</div>
        </div>
        <LoginAuth0/>
    </div>
    )
}
