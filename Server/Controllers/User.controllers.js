const userModel = require("../Models/User.models");
const bcrypt = require("bcrypt")  
const jwt = require('jsonwebtoken'); 
require("dotenv").config()    
let secret = process.env.SECRET
const welcomeUser = (req, res) => {
    res.send("Welcome to the User Controller");
}

const about = (req, res) => {
    res.send("What do you want to know about us");
}

const register = (req, res) => {
    res.send("Welcome to the register Page");
}
const login = (req, res) => {
    res.send("The LOGIN PAGE");
    
}

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email: email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
                console.error("error compare", err);
                return res.status(500).json({ message: "internal server error" });
            }
            if (result) {
                const token = jwt.sign({ id: user._id }, secret, { expiresIn: "1d" });
                return res.status(200).json({ message: "login successful", token: token, user: user });
            } else {
                return res.status(401).json({ message: "invalid email or password" });
            }
        });
    } catch (error) {
        console.error("Error in loginUser:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};





const registerUser = (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    let saltRound = 10
    const hashedPassword = bcrypt.hashSync(password, saltRound)
    console.log(req.body);
    let user = new userModel({firstName, lastName, email, password:hashedPassword});
    user.save()
        .then((response) => {
            console.log("User saved successfully", response);
            res.status(201).json("User registered successfully");
        })
        .catch((err) => {
            console.log(err);
        })
}

const dashboard = async (req, res) =>{
    let token = req.headers.authorization.split(" ")[1];
    console.log(token);
    jwt.verify(token, secret, (err, result)=> {
        if(err){
            // console.log(err);
            res.send({status: false, message: "Invalid token"})
    }else {
        // console.log(result);
        res.send({status: true, message: "valid token"})
    }
    })
}



module.exports = {
    welcomeUser, about, login, register, registerUser, loginUser, dashboard
}

