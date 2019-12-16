import React from 'react'
import { NavLink } from 'react-router-dom'

const LoggedIn= (props) => {
   // const { profileName} = props

    return  (
        <ul className="right bold-nav">
            <li><NavLink to ='/create'>Post a new</NavLink></li>
            <li><a onClick={props.signOut}>Log Out</a></li>
            <li><NavLink to ='/profile' className='btn btn-floating yellow darken-3'>{profileName.initials}</NavLink></li>
        </ul>
    )
}

export default LoggedIn