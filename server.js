const express = require('express')
const app = express()
const path = require('path')
const port = 3000

//Add routes & API stuff here

app.get("/hello" , async (req , res) => {
    res.send("hello") 
})

//Serves Svelte app & static content (Favicon, Images, CSS, etc)

app.use(express.static('client/public'))
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'))
})

app.listen(port, () => console.log('Express is running at port ' + port))