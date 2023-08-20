import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const surveyAnswers = (state =[], action) => {
    console.log("surveyAnswers reducer")
    if (action.type === "SUBMIT_Q1") {
        console.log("surveyAnswers has recieved SUBMIT_Q1 payload")
        return [...state, action.payload]
    }
    if (action.type === "SUBMIT_Q2") {
        console.log("surveyAnswers has recieved SUBMIT_Q1 payload")
        return [...state, action.payload]
    }
    if (action.type === "SUBMIT_Q3") {
        console.log("surveyAnswers has recieved SUBMIT_Q1 payload")
        return [...state, action.payload]
    }
    if (action.type === "SUBMIT_Q4") {
        console.log("surveyAnswers has recieved SUBMIT_Q1 payload")
        return [...state, action.payload]
    }
    if (action.type === 'CLEAR_ANSWERS') {
        return []
    }
    return state
  }


const reduxStore = createStore(
    combineReducers({
        // reducers go here
        surveyAnswers
    }),
    applyMiddleware(logger)
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={reduxStore}>
            <App />
        </Provider>
    </React.StrictMode>
);
