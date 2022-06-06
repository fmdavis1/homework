//load express
const express = require('express')
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



app.listen(PORT, () => {
    console.log('Server is running...')
})