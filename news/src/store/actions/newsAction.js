export const createNew = (anew) => {
    return(dispatch, getState, {getFirebase, getFirestore}) =>{
        //make async call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid
        firestore.collection('news').add({
            ...anew,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            photo:anew.photo,
            video:anew.video,
            authorId: authorId,
            likes:0,
            createdAt: new Date()
        }).then(()=> {
            dispatch({type : 'CREATE_NEW', anew});

        }).catch((err)=> {
            dispatch({type : 'CREATE_NEW_ERROR', err})
        })
        

    }
}