const {MongoClient} = require('mongodb');
const uri = 'mongodb+srv://ridcloud9:AbV8hm1kTBcWwSye@namastenodejs.akklj.mongodb.net/';
const client = new MongoClient(uri);
const getUsers = async (req,res) =>{
    try{
        const collection = client.db('hello').collection('User');
        const users = await collection.find({}).toArray();
        res.status(200).json(users);
    }catch(e){
        throw new Error(e);
    }
}

const getUser = async(req, res)=>{
    try{
        const firstName = req.params.firstName;
        console.log(firstName);
        const collection = client.db('hello').collection('User');
        const user = await collection.findOne({"first_name" : firstName});
        res.status(200).json(user);
    }catch(e){
        throw new Error(e);
    }
}

const createUser = async(req, res)=>{
    try{
        console.log(req);
        let user = req.body;
        console.log(user);
        const collection = client.db('hello').collection('User');
        user = await collection.insertOne({
            "first_name": user.firstName,
            "last_name": user.lastName,
            "city": user.city,
            "country": user.country,
            "phone_no": user.phone_no
        });
        console.log(user);
        res.status(200).json(`User Inserted successfully`);
    }catch(e){
        throw new Error(e);
    }
}

const deleteUser = async(req, res)=>{
    try{
        const firstName = req.params.firstName;
        console.log(firstName);
        const collection = client.db('hello').collection('User');
        await collection.deleteOne({"first_name" : firstName});
        res.status(200).json('User deleted successfully');
    }catch(e){
        throw new Error(e);
    }
}
module.exports = {
    getUsers,
    getUser,
    createUser,
    deleteUser
};