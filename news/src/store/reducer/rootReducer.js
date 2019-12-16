import logRegReducer from './logRegReducer'
import newsReducer from './newsReducer'
import { combineReducers } from 'redux'
import {firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: logRegReducer,
    news: newsReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer
