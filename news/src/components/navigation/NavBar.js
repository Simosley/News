import React from 'react'
import { Link } from 'react-router-dom'
import LoggedOut from './LoggedOut'
import LoggedIn from './LoggedIn'
import {connect } from 'react-redux'

const NavBar= (props) =>{
    const  { auth } = props
    const logInOut = auth.uid ? <LoggedIn /> : <LoggedOut />;
    return(
        <nav className="nav-wrapper center blue lighten-2">
            <div className="container">
                <Link to='/' className="brand-logo bold-nav">News</Link>
                {logInOut}
            </div>
        </nav>
    )
}
const mapStateToProps = (state) => {
console.log('redux bazata',state);

    return{
        auth: state.firebase.auth

    }
}

export default connect(mapStateToProps)(NavBar)