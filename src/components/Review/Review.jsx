import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { List, ListItem } from '@mui/material';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useHistory } from 'react-router-dom';
import { Box } from '@mui/system';


export function Review() {
    const surveyAnswers = useSelector(store => store.surveyAnswers)

    const history = useHistory();
    const dispatch = useDispatch();
    console.log("surveyAnswers", surveyAnswers)
    console.log("🔴", surveyAnswers)
    let answersPackage = {
        Feeling: surveyAnswers[0],
        Understanding: surveyAnswers[1],
        Support: surveyAnswers[2],
        Comments: surveyAnswers[3],
    }

    const keysAsString = Object.keys(answersPackage).map((key) => String(key));

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
    <Box  sx={{ border: 5 }}   display="flex" flex-direction="column-reverse" alignItems="center" justifyContent="center">
        
            <List>
                {surveyAnswers.map((item, index) => (
                    <ListItem key={index}>{keysAsString[index]}: {item}</ListItem>
                ))}
            </List>

            <Button variant="contained" onClick={() => handleSubmit()}>
                SUBMIT
            </Button>
        
    </Box>
</>
    );
}
