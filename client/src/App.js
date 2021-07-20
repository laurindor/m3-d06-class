import React, {useState} from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';

import AddProject from './components/projects/AddProject'
import ProjectList from './components/projects/ProjectList'
import ProjectDetails from './components/projects/ProjectDetails';
import Navbar from './components/navBar/Navbar'
import Signup from './components/Auth/Signup'
import Login from './components/Auth/Login'
import ProtectedRoute from './components/Tasks/ProtectedRoute';
import DisplayUserName from './components/Tasks/DisplayUserName';

function App() {

  const initialLoginState = null
  const[loggedInUser, setLoggedInUser] = useState(initialLoginState)

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
          <Route exact path="/projects" component={ProjectList}/>
          <Route exact path="/projects/:projectId" component={ProjectDetails} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" render={props=> <Login {...props} setLoggedInUser={setLoggedInUser}/>} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
