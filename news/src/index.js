
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { createStore, combineReducers } from 'redux'
import { ReactReduxFirebaseProvider, firebaseReducer } from 'react-redux-firebase'
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore'
import App from './App'

var firebaseConfig = {
    apiKey: "AIzaSyC8g1c94PM6_5zTqjeeONTRLuVVCSaP3Ak",
    authDomain: "news-40f69.firebaseapp.com",
    databaseURL: "https://news-40f69.firebaseio.com",
    projectId: "news-40f69",
    storageBucket: "news-40f69.appspot.com",
    messagingSenderId: "948523848797",
    appId: "1:948523848797:web:0a65928aaee6afbf9fe9b4",
    measurementId: "G-PKS37JL5Q2"
  };

firebase.initializeApp(firebaseConfig)
firebase.firestore()

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer
  })

  const initialState = {}
  const store = createStore(rootReducer, initialState)

  const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true
  }

  const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
  }

render(<Provider store={store}><ReactReduxFirebaseProvider {...rrfProps}><App/></ReactReduxFirebaseProvider></Provider>, document.getElementById('root'));