import './App.css';
import Home from './components/fullComponents/Home/Home';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

export default function App() {
    return (
      <Router className="rrouter">
        <div>
        <Switch className="sswitch">
          <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    );
}

