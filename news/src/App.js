import React, { Component } from 'react'
import NavBar from './components/navigation/NavBar'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import LoginPage from './components/loginRegister/LoginPage'
import RegisterPage from './components/loginRegister/RegisterPage'

class App extends Component {
    render() {
        return (
            <div>
             <BrowserRouter>
                <div className="App">
                    <NavBar/>
                     <Switch>
                        <Route exact path = '/' />
                        <Route path = '/project/:id' />
                        <Route path = '/login' component ={LoginPage}/>
                        <Route path = '/register' component ={RegisterPage}  />
                        <Route path = '/create'  />
                        <Route path = '/profile'  />
                    
                    </Switch>
                </div>
            </BrowserRouter>
            </div>
        )
    }
}
export default App
