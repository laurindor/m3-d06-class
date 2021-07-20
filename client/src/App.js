<<<<<<< HEAD
import React, {useEffect, useState} from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import AddProject from './components/projects/AddProject'
import ProjectList from './components/projects/ProjectList'
import ProjectDetails from './components/projects/ProjectDetails';
import Navbar from './components/navBar/Navbar'
import Signup from './components/Auth/Signup'
import Login from './components/Auth/Login';


function App() {

  const initialLoginState = null
  const[loggedInUser, setLoggedInUser] = useState(initialLoginState)
    return (
    <div className="App">


      <BrowserRouter>
        <Navbar loggedInUser={loggedInUser} />
        <Switch>
          <Route exact path="/projects" component={ProjectList}/>
          <Route exact path="/projects/:projectId" component={ProjectDetails} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" render={props=> <Link {...props} setLoggedInUser={setLoggedInUser}/>} />
        
        </Switch>
      </BrowserRouter>
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
>>>>>>> def5bcf0821ae4d9f341176cff2265e5dcf7202f
    </div>
  );
}

export default App;
