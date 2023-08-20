import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

export function Question4() {

  const [questionFourAnswer, setQuestionFourAnswer] = useState('')
  const dispatch = useDispatch();
  const history = useHistory();

  const submitQuestionFour = (event) => {
    event.preventDefault()
    console.log("in submitQuestionFour")
    let Q4Package = questionFourAnswer
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
      <Box
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="filled-basic"
          label="optional"
          variant="filled"
          value={questionFourAnswer}
          onChange={(event) => setQuestionFourAnswer(event.target.value)}
        />
      </Box>
      <Button onClick={submitQuestionFour} variant="contained" endIcon={<SendIcon />}>
        NEXT
      </Button>
    </form>
  </div>;
}
