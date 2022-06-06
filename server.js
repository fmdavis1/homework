//load express
const express = require('express')

const answersArray = require('./Models/answersMB')

//create an instance of express
const app = express()
const PORT = 3000

//Middleware functions
//They update the request as soon as they come in.

// app.use((req, res, next) => {
//     console.log('Running the middleware function!')
//     next() //Go to the next middleware or the response.
// })

//JSON Middleware
app.use(express.json())

//if we don't need to read data from the url
app.use(express.urlencoded({extended: false}))

//Set up view engine
app.set('view engine', 'ejs')
app.set('views', './Views')

//Root route
app.get('/greetings/:name', (req, res) => {
    res.send(`Greetings, ${req.params.name}!`)
})

app.get('/tip/:total/:tipPercentage',(req,res) => {
    const  results = Number((`${req.params.tipPercentage}` /100) * `${req.params.total}`)
    res.render('tip',{results})
})

let question = 'Will%20I%20Be%20A%20Millionaire'
const space = ' '
const twentyP = '%20'


app.get('/magic/question',(req,res) => {
    const stringIndex = Math.floor(Math.random() * answersArray.length);
    const answer = answersArray[stringIndex]

    function splitString(stringToSplit, separator) {
        const arrayOfStrings = stringToSplit.split(separator)
        
        newQuestion = arrayOfStrings.join(space)
      return newQuestion
    }
    
    newQuestion = splitString(question, twentyP)
    res.render('magicBall', {question: newQuestion, answer: answer})
    
})



app.listen(PORT, () => {
    console.log('Server is running...')
})