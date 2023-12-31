import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useLocation } from 'react-router-dom';

export const Header = () => {
    const surveyAnswers = useSelector(store => store.surveyAnswers);
    const location = useLocation();

    if(location.pathname === '/confirmed'){
        return(
        <>
          <header className='App-header'>
            <h1 className='App-title'>Feedback!</h1>
            <h4>THANK YOU FOR YOUR FEEDBACK!</h4>
          </header>
        </>
      )
    }
    if (surveyAnswers.length < 4) {
      return (
        <>
          <header className='App-header'>
            <h1 className='App-title'>Feedback!</h1>
            <h4>Question {surveyAnswers.length + 1} of 4</h4>
          </header>
        </>
      );
    } if(surveyAnswers.length == 4) {
      return (
        <>
          <header className='App-header'>
            <h1 className='App-title'>Feedback!</h1>
            <h4>REVIEW YOUR ANSWERS</h4>
          </header>
        </>
      );
    }
  };
  