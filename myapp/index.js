const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res)=>{

    res.send('My name is Osas')
})
app.get('/user', (req, res)=>{

    res.send('This user is Osas')
})
app.listen(port,()=>{
    console.log(`The app is running on port: ${port}`)
})