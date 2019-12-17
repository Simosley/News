import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect} from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import { likeNew } from '../../store/actions/mainActions'
const readMoreNew = (props) => {
    const  { news,anew,auth,profile,likeNew } = props;
    console.log("props" ,props)
    if (!auth.uid) return <Redirect to ='/login' />
      
    
    if(anew){
    return (
        <div className="container">
        <h1 className="center">{anew.title}</h1>  
        <div className="videoWrapper center">
                <iframe width="500" height="300"
                src={anew.video}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0"
                allowFullScreen
                title={anew.title}
                />
            </div>
            
            <div className="card">
            
                <div className="card-content">
                    <span className="card-title">{anew.title}</span>
                </div>
            </div>
        </div>
    )
  } else{
      return(
          <div className="container">
              <p>Loading New....</p>
          </div>
      )

  }
}
const mapStateToProps = (state, ownProps) => {
     console.log('tva',state);
     console.log('ownProps',ownProps);
     
     
     const id = ownProps.match.params.id
     const news = state.firestore.data.news;
     console.log('novini',news);
     
     const anew = news ? news[id] : null
     return{
         news: state.firestore.ordered.news,
         auth: state.firebase.auth,
         profile:state.firebase.profile,
         anew:anew
 
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
         {collection: 'news'}
     ])
 )(readMoreNew)
