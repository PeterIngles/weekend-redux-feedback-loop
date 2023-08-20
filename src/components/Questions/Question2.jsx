import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export function Question2() {

  const [questionTwoAnswer, setQuestionTwoAnswer] = useState('')
  const dispatch = useDispatch();
  const history = useHistory();

  const submitQuestionTwo = (event) => {
    event.preventDefault()
    console.log("in submitQuestionTwo")
    let Q2Package = questionTwoAnswer
    console.log(`Adding questionTwoAnswer`, { questionTwoAnswer })
    if (!questionTwoAnswer) {
      alert("Please select an answer");
      return;
    }
    dispatch({
      type: "SUBMIT_Q2",
      payload: Q2Package
    })
    history.push('/3')
  }

  return <div>
    <form className="questionFormTwo">
      <h2>How well are you understanding the content?</h2>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
        <InputLabel>Understanding</InputLabel>
        <Select
          required
          type="number"
          min={1}
          max={6}
          value={questionTwoAnswer}
          onChange={(event) => setQuestionTwoAnswer(event.target.value)}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
        </Select>
      </FormControl>
      <Button onClick={submitQuestionTwo} variant="contained" endIcon={<SendIcon />}>
        NEXT
      </Button>
    </form>
  </div>;
}
