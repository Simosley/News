import React, { Component } from 'react'
import {connect} from 'react-redux'
import { createNew } from '../../store/actions/newsAction'
import { Redirect } from 'react-router-dom'
class CreateNew extends Component {
    state = {
        title: '',
        content : '',
        photo:'',
        video:''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
        
    }
    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state)
        let modedVideo = this.state.video.replace('watch?v=','embed/');
        this.state.video=modedVideo
  
        this.props.createNew(this.state)
        this.props.history.push('/')
        
        
    }
    render() {

        const { auth } = this.props
        
        
        if (!auth.uid) return <Redirect to ='/login'/>
        return (
        <div className="container">
            <div className="card-panel">
                <form onSubmit={this.handleSubmit}>
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
                        <label htmlFor="photo">Photo Url</label>
                        <input type="text" id ="photo" onChange = {this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <i className="material-icons prefix">videocam</i>
                        <label htmlFor="video">Youtube Video Url</label>
                        <input type="text" id ="video" onChange = {this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn waves-effect waves-light col s12 ButtonColor">Post</button>
                        
                    </div>
                </form>
            </div>
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
