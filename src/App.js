import './App.css';
import Home from './components/fullComponents/Home/Home';
import Login from './components/fullComponents/loginAndRegister/login/login';
import Register from './components/fullComponents/loginAndRegister/register/register';
import Explore from './components/fullComponents/explore/explore';
import Sugested from './components/fullComponents/sugested/sugested';
import Rank from './components/fullComponents/rank/rank';
import Contact from './components/fullComponents/contact/contact';
import AboutUs from './components/fullComponents/aboutUs/aboutUs';
import TermsOfUse from './components/fullComponents/termsOfUse/termsOfUse';
import Support from './components/fullComponents/support/support';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router className="rrouter">

        <Switch className="sswitch">
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/explore" component={Explore} />
          <Route path="/sugested" component={Sugested} />
          <Route path="/rank" component={Rank} />
          <Route path="/contact" component={Contact} />
          <Route path="/aboutUs" component={AboutUs} />
          <Route path="/termsOfUse" component={TermsOfUse} />
          <Route path="/support" component={Support} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;