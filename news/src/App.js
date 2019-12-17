import React, { Component } from 'react'
import NavBar from './components/navigation/NavBar'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import LoginPage from './components/loginRegister/LoginPage'
import RegisterPage from './components/loginRegister/RegisterPage'
import Profile from './components/Profile/Profile'
import createNew from './components/News/createNew'
import homePage from './components/navigation/homePage'
import readMoreNew from './components/navigation/readMoreNew'

class App extends Component {
    render() {
        return (
            <div>
             <BrowserRouter>
                <div className="App">
                    <NavBar/>
                     <Switch>
                        <Route exact path = '/'component ={homePage} />
                        <Route path = '/new/:id'component ={readMoreNew} />
                        <Route path = '/login' component ={LoginPage}/>
                        <Route path = '/register' component ={RegisterPage}  />
                        <Route path = '/create' component={createNew} />
                        <Route path = '/profile' component={Profile} />
                    
                    </Switch>
                </div>
            </BrowserRouter>
            </div>
        )
    }
}
export default App
