import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const Header = () => {
    const surveyAnswers = useSelector(store => store.surveyAnswers)
    
 return (<>
    <header className='App-header'>
      <h1 className='App-title'>Feedback!</h1>
      <h4>Question {surveyAnswers.length + 1} of 4</h4>
    </header>
  </>
);
 }