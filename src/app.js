const express = require('express');
const app = express();


app.use('/', (req, res)=>{
    res.send("hello from server!");
})

app.get('/user', (req, res)=>{
    res.send("Getting the user!");
})


app.listen(3000, ()=>{
    console.log("Server is listening on port 3000");
});