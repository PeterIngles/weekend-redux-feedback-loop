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

export function Question3() {

    const [questionThreeAnswer, setQuestionThreeAnswer] = useState('')
    const dispatch = useDispatch();
    const history = useHistory();
  
    const submitQuestionThree = (event) => {
      event.preventDefault()
      console.log("in submitQuestionThree")
      let Q3Package = questionThreeAnswer
      console.log(`Adding questionThreeAnswer`, { questionThreeAnswer })
      if (!questionThreeAnswer) {
        alert("Please select an answer");
        return;
      }
      dispatch({
        type: "SUBMIT_Q3",
        payload: Q3Package
      })
      history.push('/4')
    }

    return <div>
        <form className="questionFormThree">
            <h2>How well are you being supported?</h2>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
        <InputLabel>Supported</InputLabel>
        <Select
          required
          type="number"
          min={1}
          max={6}
          value={questionThreeAnswer}
          onChange={(event) => setQuestionThreeAnswer(event.target.value)}>
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
      <Button onClick={submitQuestionThree} variant="contained" endIcon={<SendIcon />}>
        NEXT
      </Button>
    </form>
    </div>;
}
