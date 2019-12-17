export const logIn = (credentials) => {
    return(dispatch , getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({type: 'LOGIN_SUCCESS'})
        }).catch((err) => {
            dispatch({type: 'LOGIN_ERROR', err})
        })
    }
}

export const logOut = () => {
    return (dispatch,getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.logout();
        firebase.auth().signOut().then(() => {
            dispatch({type: ' LOGOUT_SUCCESS'})
        })

    }
}

export const register = (newUser) => {
    return ( dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then( resp => {
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                photoUrl: newUser.photoUrl,
                newsLiked: []
            })

        }).then(() => {
            dispatch({ type: 'REGISTER_SUCCESS'})
        }).catch((err) => {
            dispatch({type : 'REGISTER_ERROR', err})
        })
    }
}
export const likeNew = (newsId) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const personId = getState().firebase.auth.uid;
        var personsLikedNews;
        personsLikedNews = profile.newsLiked.length > 0 ? 
                      JSON.parse(JSON.stringify(profile.newsLiked)) :
                      personsLikedNews = [];

        // newsId - current newsId
        // personsLikedNews - all event the person is participating
        const currNew= getState().firestore.ordered.news.find(anew => anew.id === newsId)
        let currentNewLikes = currNew.likes
        if(personsLikedNews.includes(newsId)) {
          personsLikedNews = personsLikedNews.filter(aNew => aNew !== newsId)
          currentNewLikes-=1;
        } else {
          personsLikedNews.push(newsId);
          currentNewLikes+=1
        }

        firestore.collection('users').doc(`${personId}`).set({
            ...profile,
            newsLiked: personsLikedNews
        }).then(() =>{
            firestore.collection('news').doc(`${newsId}`).set({
                ...currNew,
                likes: currentNewLikes
            })
        })
        .then(() => {
            dispatch({ type: "LIKE_NEW" });
        }).catch((err) => {
            dispatch({ type: "LIKE_NEW_ERROR", err});
        });
    }
};