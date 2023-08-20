// import { useState } from 'react';
import { useDispatch, useSelector, } from 'react-redux';
import axios from 'axios';
import { useState } from 'react';

import { useHistory } from 'react-router-dom'

export function Review() {
    const surveyAnswers = useSelector(store => store.surveyAnswers)
    console.log("???")

    const history = useHistory();
    const dispatch = useDispatch();
    console.log("surveyAnswers", surveyAnswers)

    let answersPackage = {
        feeling: surveyAnswers[0],
        understanding: surveyAnswers[1],
        support: surveyAnswers[2],
        comments: surveyAnswers[3],
    }

    console.log("answersPackage", answersPackage)

    const handleSubmit = () => {
        console.log("inside handleSubmit")
        axios.post('/answers', answersPackage)
            .then(response => {
                dispatch({ type: 'CLEAR_ANSWERS' })
            }).catch((error) => {
                console.log('put failed:', error);
            })
        history.push('/confirmed')
    }

    return (
        <>
            <h1>REVIEW</h1>

            <div>
                <h2>Answers</h2>
                <div>
                    <ul>
                        {surveyAnswers.map((item, index) => {
                            return <li key={index}>{item}</li>;
                        })}
                    </ul>
                </div>
            </div>

            <h1>
                <button onClick={() => handleSubmit()}>SUBMIT</button>
            </h1>

        </>
    );
}
