const express = require('express');
const { connectDB} = require('./config/database');
const {User} = require('./models/user');
const app = express();

app.use(express.json());

app.post('/signup', async (req, res)=>{
     const user = new User(req.body);
     await user.save();
    res.send("User added successfully!");
})

connectDB().then(()=>{
    console.log("DB connection established...");
    app.listen(3000, ()=>{
        console.log('Server listening on port:3000');
    })
}).catch((e)=>{
    console.log("Error : "+ e);
    throw new Error("DB connection failed");
})

