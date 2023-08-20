import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';

export function Question4() {

    const [questionFourAnswer, setQuestionFourAnswer] = useState('')
    const dispatch = useDispatch();
    const history = useHistory();
  
    const submitQuestionFour = (event) => {
      event.preventDefault()
      console.log("in submitQuestionFour")
      let Q4Package = { questionFourAnswer: questionFourAnswer }
      console.log(`Adding questionFourAnswer`, { questionFourAnswer })
      dispatch({
        type: "SUBMIT_Q4",
        payload: Q4Package
      })
      history.push('/review')
    }

    return <div>
        <form className="questionFormFour">
            <h2>Any comments you want to leave?</h2>
            <input
                type="string"
                placeholder="optional"
                value={questionFourAnswer}
                onChange={(event) => setQuestionFourAnswer(event.target.value)} />
            <button onClick={submitQuestionFour}>NEXT➡️</button>
        </form>
    </div>;
}
