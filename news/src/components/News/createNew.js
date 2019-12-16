import React, { Component } from 'react'
import {connect} from 'react-redux'
import { createNew } from '../../store/actions/newsAction'
import { Redirect } from 'react-router-dom'
class CreateNew extends Component {
    state = {
        title: '',
        content : '',
        photo:''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
        
    }
    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state)
        
        this.props.createNew(this.state)
        this.props.history.push('/')
        
        
    }
    render() {

        const { auth } = this.props
        
        
        if (!auth.uid) return <Redirect to ='/login'/>
        return (
            <div className="col s12 z-depth-6 card-panel login-page">
                <form onSubmit={this.handleSubmit} className="white-bitch">
                    <h5 className="grey-text text-darken-3">Post a new</h5>
                    <div className="input-field">
                        <i className="material-icons prefix">title</i>
                        <label htmlFor="title">Title</label>
                        <input type="text" id ="title" onChange = {this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <i className="material-icons prefix">short_text</i>
                        <label htmlFor="content">Content</label>
                        <textarea id="content" className="materialize-textarea" onChange = {this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <i className="material-icons prefix">add_a_photo</i>
                        <label htmlFor="photo">Photo</label>
                        <input type="text" id ="photo" onChange = {this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn waves-effect waves-light col s12 ButtonColor">Post</button>
                        
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth : state.firebase.auth,
    }
}
const mapDispatchToProps = (dispatch)  => {
    return{
        createNew: (anew) => dispatch(createNew(anew))
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(CreateNew)
