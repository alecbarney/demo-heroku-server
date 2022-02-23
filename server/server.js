const { response } = require('express')
const express = require('express')
const path = require('path')

const app = express()

app.get('/', (req, res)=>{
response.sendFile(path.join(__dirname, '../index.html'))
});

const port = process.env.PORT || 4005;

app.listen(port, ()=>{
    console.log(`Shitting on port ${port}`)
});