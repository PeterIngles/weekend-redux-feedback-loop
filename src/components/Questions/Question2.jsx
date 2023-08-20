import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';

export function Question2() {

    const [questionTwoAnswer, setQuestionTwoAnswer] = useState('')
    const dispatch = useDispatch();
    const history = useHistory();
  
    const submitQuestionTwo = (event) => {
      event.preventDefault()
      console.log("in submitQuestionTwo")
      let Q2Package = { questionTwoAnswer: questionTwoAnswer }
      console.log(`Adding questionTwoAnswer`, { questionTwoAnswer })
      dispatch({
        type: "SUBMIT_Q2",
        payload: Q2Package
      })
      history.push('/3')
    }

    return <div>
        <form className="questionFormTwo">
            <h2>How well are you understanding the content?</h2>
            <input
                required
                type="number"
                min={1}
                max={6}
                placeholder="1-6"
                value={questionTwoAnswer}
                onChange={(event) => setQuestionTwoAnswer(event.target.value)} />
            <button onClick={submitQuestionTwo}>NEXT➡️</button>
        </form>
    </div>;
}
