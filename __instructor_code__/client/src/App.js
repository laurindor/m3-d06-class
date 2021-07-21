import React, {useState, useEffect} from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';

import * as auth from './services/auth-service'
import AddProject from './components/projects/AddProject'
import ProjectList from './components/projects/ProjectList'
import ProjectDetails from './components/projects/ProjectDetails';
import Navbar from './components/navbar/Navbar'
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'
import ProtectedRoute from './components/ProtectedRoute'
import DisplayUserName from './components/DisplayUserName'

function App() {

  const initialLoginState = null
  const[loggedInUser, setLoggedInUser] = useState(initialLoginState) // Thsi cannot be set to the value of the cookie because it's unsafe to read your own cookie

  useEffect(()=>{
    const response = auth.isLoggedIn()
    if(response._id) setLoggedInUser(response)
    else setLoggedInUser(initialLoginState)
  })

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar loggedInUser={loggedInUser}/>
        <Switch>
          <ProtectedRoute
            user={loggedInUser}
            path={'/projects/protected'}
             component={DisplayUserName}
          />
          <Route exact path="/projects/:projectId" component={ProjectDetails} />
          <Route exact path="/projects" component={ProjectList}/>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" render={props=> <Login {...props} setLoggedInUser={setLoggedInUser}/>} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
