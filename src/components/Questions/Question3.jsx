import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';

export function Question3() {

    const [questionThreeAnswer, setQuestionThreeAnswer] = useState('')
    const dispatch = useDispatch();
    const history = useHistory();
  
    const submitQuestionThree = (event) => {
      event.preventDefault()
      console.log("in submitQuestionThree")
      let Q3Package = questionThreeAnswer
      console.log(`Adding questionThreeAnswer`, { questionThreeAnswer })
      dispatch({
        type: "SUBMIT_Q3",
        payload: Q3Package
      })
      history.push('/4')
    }

    return <div>
        <form className="questionFormThree">
            <h2>How well are you being supported?</h2>
            <input
                required
                type="number"
                min={1}
                max={6}
                placeholder="1-6"
                value={questionThreeAnswer}
                onChange={(event) => setQuestionThreeAnswer(event.target.value)} />
            <button onClick={submitQuestionThree}>NEXT➡️</button>
        </form>
    </div>;
}
