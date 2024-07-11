const express = require('express')
require('dotenv').config();
const  mongoose = require('mongoose')
let port = process.env.PORT || 3000
const userRouter = require('./Routes/User.routes');
let uri = "mongodb+srv://patrickolamide005:facebook33@cluster0.l07fkwl.mongodb.net/Bank_App?retryWrites=true&w=majority&appName=Cluster0"
const cors =  require('cors')

// const mongoose = require('mongoose');
const app = express();

app.use(cors());
app.use(express.json());
app.use("/students", userRouter);

app.listen(port, () =>{
    mongoose.connect(uri)
    .then(()=>{
        console.log(
            `Server is running on port ${port} and database connected`
        );
    })
    .catch((err) =>{
        console.error(err);
    })
});