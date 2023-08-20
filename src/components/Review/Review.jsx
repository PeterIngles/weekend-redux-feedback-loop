import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { List, ListItem } from '@mui/material';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useHistory } from 'react-router-dom';

export function Review() {
    const surveyAnswers = useSelector(store => store.surveyAnswers)

    const history = useHistory();
    const dispatch = useDispatch();
    console.log("surveyAnswers", surveyAnswers)
    console.log("🔴", surveyAnswers)
    let answersPackage = {
        feeling: surveyAnswers[0],
        understanding: surveyAnswers[1],
        support: surveyAnswers[2],
        comments: surveyAnswers[3],
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
            <Container>
                <List>
                    {surveyAnswers.map((item, index) => (
                        <ListItem key={index}>{keysAsString[index]}   {item}</ListItem>
                    ))}
                </List>

                <Button variant="contained" onClick={() => handleSubmit()}>
                    SUBMIT
                </Button>
            </Container>
        </>
    );
}
