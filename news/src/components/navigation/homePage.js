import React, { Component } from 'react'
import { connect } from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import { compose } from 'redux'
import {Redirect} from 'react-router-dom'
import { Link } from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css'
import moment from 'moment'
import {likeNew} from '../../store/actions/mainActions'

class HomePage extends Component{
    render(){
        const { news, auth,profile,likeNew }= this.props
         
        const handleLike = (e) => {
            e.preventDefault();
            if (!auth.uid) return <Redirect to ='/login' />
            const currentnewId = e.target.parentNode.parentNode.parentNode.parentNode.id;            
            likeNew(currentnewId);
        } 
        return(
            <div className="container">
                <h2>News</h2>

                <div className="row">
                    
                        {news && 
                            news.map(anew => {
                                return(
                                    <div className="col s12 m4" key={anew.id} id={anew.id}>
                                    <div className="card hoverable" >
                                        <div className="card-image waves-effect waves-block waves-light">
                                            <img className="activator" src={anew.photo} width="100" height="200"/>                                 
                                        </div>
                                        <div className="card-content black-text text-darken-3">
                                           <span className="card-title activator">{anew.title}</span>                                      
                                           <p className="grey-text lighten-3 ">Created By: {anew.authorFirstName} {anew.authorLastName}</p>   
                                           <p className="grey-text">{moment(anew.createdAt.toDate()).calendar()}</p>                            
                                        </div>
                                        <div className="card-reveal">
                                            <span className="card-title grey-text text-darken-4">{anew.title}<i className="material-icons right">close</i></span>
                                            <p>{anew.content}</p>
                                        </div>
                                        <div className="card-action">                                          
                                            <a href="#"className="btn-floating waves-effect waves-light red">
                                                <i className="material-icons prefix" onClick={handleLike}>{(profile.newsLiked && profile.newsLiked.includes(anew.id)) ? 'favorite' : 'favorite_border'}</i>
                                            </a>
                                            <Link to = {'/new/' + anew.id} key ={anew.id} className="btn waves-effect waves-light right read-more">Read More</Link>
                                            <p>Likes: {anew.likes}</p>
                                            
                                        </div>
                                       
                              </div>
                              </div>

                                )
                            })


                        }
                        
                        
                    
                </div>
           
            </div>
        )
    }
}

    

const mapStateToProps = (state) => {
    console.log('state na homePage',state);
    
    return{
        news: state.firestore.ordered.news,
        auth: state.firebase.auth,
        profile: state.firebase.profile
        
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        likeNew: (newId) => dispatch(likeNew(newId))
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect([
        {collection : 'news',orderBy:['createdAt', 'desc']}
    ])
)(HomePage)