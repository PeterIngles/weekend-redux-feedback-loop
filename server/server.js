const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const pool = require("./modules/pool")

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.post('/answers', (req, res) => {
    console.log('in answers post', req.body)

    let newAnswers = req.body

    // Storing newTask properties in an array for readability in pool.query
    let answersPostArray = [newAnswers.feeling, newAnswers.understanding, newAnswers.support, newAnswers.comments]

    let queryText = `
    INSERT INTO "feedback" 
	("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4); 
    `

    pool.query(queryText, answersPostArray)
    .then(result => {
        console.log('answers post is running')
        res.sendStatus(201)
    })
    .catch(error => {
        console.log('error in tasksRouter post', error)
        res.sendStatus(500)
    })
})

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});