import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Redirect } from 'react-router-dom'

class Profile extends Component {
    render() {
        const { name,email,profileImage ,auth} =this.props
        if (!auth.uid) return <Redirect to ='/login' />
        //const userNews = news.filter(aNew => aNew.authorId ===userId);
        return (
            <div className="card-karta">
            <div className="card-glava">
                <img src={profileImage}/>
            </div>
            <div className="card-info">
                <h1 className="center-align">Personal Information</h1>
                <p>Name: {name.firstName} {name.lastName}</p>
                <p>Email: {email}</p>
            </div>
            
        </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    
    return {
    
      name:state.firebase.profile,
      auth: state.firebase.auth,
      email:state.firebase.auth.email,
      profileImage: state.firebase.profile.photoUrl
    }
}


export default connect(mapStateToProps)(Profile)

