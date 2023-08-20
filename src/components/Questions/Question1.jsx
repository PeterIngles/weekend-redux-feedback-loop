import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'

export function Question1() {

    const [questionOneAnswer, setQuestionOneAnswer] = useState('')
    const dispatch = useDispatch();
    const history = useHistory();
  
    const submitQuestionOne = (event) => {
      event.preventDefault()
      console.log("in submitQuestionOne")
      let Q1Package = questionOneAnswer
      console.log(`Adding questionOneAnswer`, { questionOneAnswer })
      dispatch({
        type: "SUBMIT_Q1",
        payload: Q1Package
      })
      history.push('/2')
    }

    return <div>
        <form className="questionFormOne">
            <h2>How are you feeling today?</h2>
            <input
                required
                type="number"
                min={1}
                max={6}
                placeholder="1-6"
                value={questionOneAnswer}
                onChange={(event) => setQuestionOneAnswer(event.target.value)} />
            <button onClick={submitQuestionOne}>NEXT➡️</button>
        </form>
    </div>;
}
