import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import './login.css'
import { NavLink } from 'react-router-dom'
import { logIn } from '../../store/actions/mainActions'

class LoginPage extends Component {
    state = {
        email: '',
        password : ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
        
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.logIn(this.state)
        
        
    }
    render() {
        const { authError, auth} =this.props
        if (auth.uid) return <Redirect to ='/' />
        return (
            <div className="col s12 z-depth-6 card-panel login-page">
                <form onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Log in</h5>
                    <div className="input-field">
                        <i className="material-icons prefix">email</i>
                        <label htmlFor="email">Email</label>
                        <input type="email" id ="email" onChange = {this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <i className="material-icons prefix">lock_outline</i>
                        <label htmlFor="password">Password</label>
                        <input type="password" id ="password" onChange = {this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <p className="center ">Dont have an account? Click here to <NavLink to ='/register'>Register</NavLink></p> 
                        <button className="btn waves-effect waves-light col s12 ButtonColor">Login</button>
                        <div className="red-text center">
                            {authError ? <p>{authError}</p> : null }
                        </div>

                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        logIn: (creds) => dispatch (logIn(creds))
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(LoginPage)
