import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {register} from '../../store/actions/mainActions'
class RegisterPage extends Component {
    state = {
        email: '',
        password : '',
        firstName: '',
        lastName: '',
        photoUrl: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
        
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.register(this.state)
        
        
    }
    render() {
        const {auth, authError} =this.props
        if (auth.uid) return <Redirect to ='/' />
        return (
            <div className="col s12 z-depth-6 card-panel login-page">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Register</h5>
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
                    <i className="material-icons prefix">person</i>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id ="firstName" onChange = {this.handleChange}/>
                    </div>
                    <div className="input-field">
                    <i className="material-icons prefix">person_outline</i>
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id ="lastName" onChange = {this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <i className="material-icons prefix">add_a_photo</i>
                        <label htmlFor="photoUrl">Photo Url</label>
                        <input type="text" id ="photoUrl" onChange = {this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn waves-effect waves-light col s12 ButtonColor">Sign Up</button>
                        <div className="red-text center">
                        { authError ? <p> {authError} </p>: null}
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
 
const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        register: (newUser) => dispatch(register(newUser))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(RegisterPage)
