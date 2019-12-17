import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logOut } from '../../store/actions/mainActions'
import './style.css'

const LoggedIn= (props) => {
   // const { profileName} = props

    return  (
        <div>
            <ul className="right bold-nav">
                <li><a onClick={props.logOut}><i className="material-icons md-49">exit_to_app</i></a></li>
                <li><NavLink to ='/profile' ><i className="material-icons md-48">account_circle</i></NavLink></li>
            </ul>
            <ul className="left">
                <li><NavLink to ='/' ><i className="material-icons md-50">home</i></NavLink></li>
                <li><NavLink to ='/create'>Post a new</NavLink></li>
            </ul>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        logOut : () => dispatch (logOut())
    }
}

export default connect(null,mapDispatchToProps)(LoggedIn)
