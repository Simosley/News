import React, { Component } from 'react'
import { connect } from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import { compose } from 'redux'
import {Redirect} from 'react-router-dom'
import { Link } from 'react-router-dom'
class HomePage extends Component{
    render(){
        //console.log(this.props);
        const { news, auth }= this.props

        //if (!auth.uid) return <Redirect to ='/' />
        return(
            <div className="container">
              
                { news &&
                news.map(anew => {
                    return(
                    <div className="card-panel" key ={anew.id}>
                        <Link to = {'/new/' + anew.id} >
                            <p>{anew.title}</p>
                        </Link>
                    </div>
                    )
                })}
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    
    return{
        news: state.firestore.ordered.news,
        auth: state.firebase.auth
        
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection : 'news'}
    ])
)(HomePage)