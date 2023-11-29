// console.log('chai aur code')

require('dotenv').config()

//// import express from 'express'                                                 
const express = require('express')                                    // same as above (express h app k paas)
const app = express()
const port = 4000                                                     // we r saying to server k 3000 port pe listen krlo (can make dis 4000 also)

app.get('/', (req, res) => {
    res.send('Hello World!')
})
/// we r saying to 'app'...k home route pe listen kro nd agr koi request aati h to callback kro jiske andr '(request, response)' hoga...koi v request aati h then response mein send kr denge 'Hello world'


//// Like above we can handle more requests (its just like a functn...1st parameter = string, 2nd == callback which has 2 params)
app.get('/twitter', (req, res) => {
    res.send('rahul0308')
})


app.get('/login', (req, res) => {
  res.send('<h1>Welcome to the world of Backend</h1>')
})
/// can send json, cookie etc etc


app.get('/youtube', (req, res) => {
res.send('<h2>Chai aur Backend</h2>')
})


app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})
/// listen ka power v app se aata h coz app 'express' se bana hua h (express ki saari functionality humne utha k le li h)...listen == method
// port == variable



//// Yahi server h jo '/' pe nd '/twitter' pe listen kr rha h nd agr koi inn routes pe jayega to 'response' v send krega 
//// localhost:4000 pe listen kr rha h