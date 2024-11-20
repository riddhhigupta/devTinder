const mongoose = require('mongoose');
const uri = 'mongodb+srv://riddhi021999:0WFFWgMe8M04xKkz@devtinder.uzup4.mongodb.net/';

const connectDB = async()=>{
    await mongoose.connect(uri);
};
module.exports = { connectDB };




