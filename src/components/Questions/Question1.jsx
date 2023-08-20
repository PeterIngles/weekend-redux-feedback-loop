import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export function Question1() {

    const [questionOneAnswer, setQuestionOneAnswer] = useState('')
    const dispatch = useDispatch();
    const history = useHistory();

    const submitQuestionOne = (event) => {
        event.preventDefault()
        console.log("in submitQuestionOne")
        let Q1Package = questionOneAnswer
        console.log(`Adding questionOneAnswer`, { questionOneAnswer })
        if (!questionOneAnswer) {
            alert("Please select an answer");
            return;
        }
        dispatch({
            type: "SUBMIT_Q1",
            payload: Q1Package
        })
        history.push('/2')
    }

    return <div>
        <form className="questionFormOne">
            <h2>How are you feeling today?</h2>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                <InputLabel id="demo-simple-select-standard-label">Feeling</InputLabel>
                <Select
                    required
                    type="number"
                    min={1}
                    max={6}
                    value={questionOneAnswer}
                    onChange={(event) => setQuestionOneAnswer(event.target.value)}>
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
            <Button onClick={submitQuestionOne} variant="contained" endIcon={<SendIcon />}>
                NEXT
            </Button>
        </form>
    </div>;
}
