import React from 'react';
import axios from 'axios';
import './App.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';

function App() {

  

  const [questionOneAnswer, setQuestionOneAnswer] = useState('')
  const dispatch = useDispatch();

  const submitQuestionOne = (event) => {
    event.preventDefault()
    console.log("in submitQuestionOne")
    let Q1Package = {questionOneAnswer: questionOneAnswer}
    console.log(`Adding questionOneAnswer`, {questionOneAnswer})
    dispatch({
      type: "SUBMIT_Q1",
      payload: Q1Package
    })
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <form className="questionFormOne">
        <h2>How are you feeling today?</h2>
        <input
          required
          type="number"
          min="1"
          max="6"
          placeholder={null}
          value={questionOneAnswer}
          onChange={(event) => setQuestionOneAnswer(event.target.value)} />
        <button onClick={submitQuestionOne}>NEXT➡️</button>
      </form>
    </div>
  );
}

export default App;
