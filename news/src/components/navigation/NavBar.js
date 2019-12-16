import React from 'react'
import { Link } from 'react-router-dom'
import LoggedOut from './LoggedOut'

const NavBar= (props) =>{
    //const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
    return(
        <nav className="nav-wrapper center blue lighten-2">
            <div className="container">
                <Link to='/' className="brand-logo bold-nav">News</Link>
                <LoggedOut/>
            </div>
        </nav>
    )
}

export default NavBar