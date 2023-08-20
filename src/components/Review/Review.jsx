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

    let answersPackage = {
        // feeling: surveyAnsers.surveyAnsers_name,
        // understanding: surveyAnsers.street_address,
        // support: surveyAnsers.city,
        // comments: surveyAnsers.zip,
    }

    // const handleCheckout = () => {
    //     axios.post('/answers', answersPackage)
    //         .then(response => {
    //             dispatch({ type: 'CLEAR_ANSWERS' })
    //         }).catch((error) => {
    //             console.log('put failed:', error);
    //         })
    //     // history.push('/')
    // }

    return (
        <>
            <h1>REVIEW</h1>
            <hr />
            <div>
                <h2>Answers</h2>
                <div>
                    <ul>
                        {surveyAnswers.map((item, index) => { // Added closing parentheses and curly braces
                            return <li key={index}>{item}</li>; // Added semicolon at the end of the line
                        })}
                    </ul>
                </div>
                {/* <p>{surveryAnswers.feeling}</p> */}
                {/* <p>{customer.street_address}</p>
                <p>{customer.city},{customer.state} {customer.zip}</p> */}
            </div>

            {/* <div><h2>For {customer.type}</h2></div>

            <table>
                <thead>
                    <tr>
                        <th>Pizza Type</th><th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((pizza, index) =>
                        <tr key={index}>
                            <td>
                                {pizza.name}
                            </td>
                            <td>
                                {pizza.price}
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div>
                <h2>Total: {cartTotal}</h2>
            </div>

            <h3><button onClick={handleCheckout}>CHECKOUT</button></h3> */}

        </>
    );

}