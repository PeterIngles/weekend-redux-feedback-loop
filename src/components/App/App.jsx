import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom'
import { Question1 } from '../Questions/Question1';
import { Question2 } from '../Questions/Question2';
import { Question3 } from '../Questions/Question3';
import { Question4 } from '../Questions/Question4';
import { Review } from '../Review/Review';
import { Confirmed } from '../Review/Confirmed'
import { Header } from './Header';

function App() {

  return (
    <div className='App'>
      <Header/>
      <Router>
        <Route path="/" exact>
          <Question1 />
        </Route>
        <Route path="/2" exact>
          <Question2 />
        </Route>
        <Route path="/3" exact>
          <Question3 />
        </Route>
        <Route path="/4" exact>
          <Question4 />
        </Route>
        <Route path="/review" exact>
          <Review />
        </Route>
        <Route path="/confirmed">
          <Confirmed />
        </Route>
      </Router>
    </div>
  );
}

export default App;

