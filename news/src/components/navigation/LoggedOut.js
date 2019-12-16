import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../index.css'

const LoggedOut= () =>{
    return(
        <ul className="right">
            <li className = "yellow-button" >< NavLink to ='/login'  >Login</NavLink></li>
        </ul>
    )
}

export default LoggedOut