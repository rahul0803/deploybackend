// console.log('chai aur code')

require('dotenv').config()

//// import express from 'express'                                                 
const express = require('express')                                    // same as above (express h app k paas)
const app = express()
const port = 4000                                                     // we r saying to server k 3000 port pe listen krlo (can make dis 4000 also)


const githubData = {
    "login": "rahul0803",
    "id": 97394143,
    "node_id": "U_kgDOBc4d3w",
    "avatar_url": "https://avatars.githubusercontent.com/u/97394143?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/rahul0803",
    "html_url": "https://github.com/rahul0803",
    "followers_url": "https://api.github.com/users/rahul0803/followers",
    "following_url": "https://api.github.com/users/rahul0803/following{/other_user}",
    "gists_url": "https://api.github.com/users/rahul0803/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/rahul0803/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/rahul0803/subscriptions",
    "organizations_url": "https://api.github.com/users/rahul0803/orgs",
    "repos_url": "https://api.github.com/users/rahul0803/repos",
    "events_url": "https://api.github.com/users/rahul0803/events{/privacy}",
    "received_events_url": "https://api.github.com/users/rahul0803/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Rahul Roy",
    "company": null,
    "blog": "",
    "location": "kolkata, India",
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 49,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2022-01-09T13:59:23Z",
    "updated_at": "2023-11-29T07:07:25Z"
  }


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


/// if we want to pass the github data to some user (object)
app.get('/github', (req, res) => {
res.json(githubData)
})
/// api call kr k kisi url pe jate h to fetch data....aise hi milta h


app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})
/// listen ka power v app se aata h coz app 'express' se bana hua h (express ki saari functionality humne utha k le li h)...listen == method
// port == variable



//// Yahi server h jo '/' pe nd '/twitter' pe listen kr rha h nd agr koi inn routes pe jayega to 'response' v send krega 
//// localhost:4000 pe listen kr rha h