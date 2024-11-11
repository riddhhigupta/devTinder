const express = require('express');
const {getUsers, getUser, createUser, deleteUser} = require('./userServices');
const app = express();
app.use(express.json());
app.get('/user', getUsers);
app.get('/user/:firstName', getUser);
app.post('/user', createUser);
app.delete('/user/:firstName', deleteUser);
app.get('/test', (req, res, next )=>{
    console.log("This is handler 1");
    next();
    // res.send('Route Handler 1');
},(req, res )=>{
    console.log("This is handler 2");
    res.send('Route Handler 2');
})
app.listen(3000, ()=>{
    console.log('Server listening on port:3000');
})