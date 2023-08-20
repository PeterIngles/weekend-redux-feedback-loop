import React from 'react';
import axios from 'axios';
import './App.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import { Question1 } from '../Questions/Question1';
import { Question2 } from '../Questions/Question2';
import { Question3 } from '../Questions/Question3';
import { Question4 } from '../Questions/Question4';

function App() {





  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <Route path="/"exact>
          <Question1 />
        </Route>
        <Route path="/2"exact>
          <Question2 />
        </Route>
        <Route path="/3"exact>
          <Question3 />
        </Route>
        <Route path="/4"exact>
          <Question4 />
        </Route>
      </Router>
    </div>
  );
}

export default App;

