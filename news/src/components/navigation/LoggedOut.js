import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../index.css'

const LoggedOut= () =>{
    return(
        <div>
            <ul className="right">
                <li className = "yellow-button" >< NavLink to ='/login'  >Login</NavLink></li>
            </ul>
            <ul className="left">
                <li><NavLink to ='/' ><i className="material-icons md-50">home</i></NavLink></li>
            </ul>
        </div>
    )
}

export default LoggedOut