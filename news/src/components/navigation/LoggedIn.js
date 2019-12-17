import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logOut } from '../../store/actions/mainActions'
import M from 'materialize-css'
import './style.css'


class LoggedIn  extends Component{
    componentDidMount() {
        let tooltip = document.querySelectorAll('.tooltipped')
        
        M.Tooltip.init(tooltip, {});
    }   
   // const { profileName} = props
    render(){
    return  (
        <div>
            <ul className="right">
                <li><a onClick={this.props.logOut}><i className="material-icons md-49">exit_to_app</i></a></li>
                <li><NavLink to ='/profile' ><i className="material-icons tooltipped md-48"data-tooltip="Profile">account_circle</i></NavLink></li>
            </ul>
            <ul className="left">
                <li><NavLink to ='/' ><i className="material-icons tooltipped md-50"data-tooltip="Home">home</i></NavLink></li>
                <li><NavLink to ='/create'>Post a new</NavLink></li>
            </ul>
        </div>
    )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logOut : () => dispatch (logOut())
    }
}

export default connect(null,mapDispatchToProps)(LoggedIn)
