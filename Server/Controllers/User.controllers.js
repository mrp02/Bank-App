const userModel = require("../Models/User.models");
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');
require("dotenv").config()
let secret = process.env.SECRET
const nodemailer = require ('nodemailer')




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
        }else{
            let confirmPassword = bcrypt.compare(password, user.password)
            if (confirmPassword) {
                const token = jwt.sign({ id: user._id }, secret, { expiresIn: "1d" });
                return res.status(200).json({ message: "login successful", token: token, user: user });
            }else{
                return res.status(401).json({ message: "invalid email or password" });
            }
        }

        // bcrypt.compare(password, user.password, (err, result) => {
        //     if (err) {
        //         console.error("error compare", err);
        //         return res.status(500).json({ message: "internal server error" });
        //     }
        //     if (result) {
        //         const token = jwt.sign({ id: user._id }, secret, { expiresIn: "1d" });
        //         return res.status(200).json({ message: "login successful", token: token, user: user });
        //     } else {
        //         return res.status(401).json({ message: "invalid email or password" });
        //     }
        // });
    } catch (error) {
        console.error("Error in loginUser:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};





const registerUser = (req, res) => {
    const { firstName, lastName, email, password, dateOfBirth, ssn } = req.body;
    let saltRound = 10
    const hashedPassword = bcrypt.hashSync(password, saltRound)
    console.log(req.body);
    let user = new userModel({ firstName, lastName, email, password: hashedPassword, dateOfBirth, ssn });
    user.save()
        .then((response) => {
            console.log("User saved successfully", response);
            res.status(201).json("User registered successfully");
        })
        .catch((err) => {
            console.log(err);
        })
}

const dashboard = async (req, res) => {
    let token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, secret, (err, result) => {
        if (err) {
            // console.log(err);
            res.send({ status: false, message: "Invalid token" })
        } else {
            // console.log(result);
            const userId = result.id
            userModel.findById(userId)
            .then((user)=>{
                console.log(user);
                res.send({ status: true, message: "valid token", user })
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    })
}

const resetPass = async (req, res) => {
    const { email } = req.body
    let user = await userModel.findOne({ email: email })
    if (user) {
        const generatedRandom = generateRandom()
        console.log(generatedRandom);
        let newPassword = bcrypt.hashSync(generatedRandom, 10)
        user.password = newPassword
        user.save()
        .then((result)=>{
            console.log(result);
            let html = `<h1>Your password has been reset, New password: ${generatedRandom}</h1>`
            sendMail(email, html)
            res.status(200).json({ message: "Password reset successfully" })
        })
        .catch((err)=>{
            console.log(err);
            res.status(500).json({ message: "Internal server error" })
        })
    }else{
        res.status(404).json({ message: "User not found" })
    }

}

const changePassword = async (req, res) => {
    const { email, oldPassword, newPassword } = req.body
    let user = await userModel.findOne({ email: email })
    if (user) {
        const comparedPassword = bcrypt.compareSync(oldPassword, user.password)
        const comparedNewPassword = bcrypt.compareSync(newPassword, user.password)
        if (comparedNewPassword) {
            res.status(401).json({ message: "New password cannot be same as old password" })
        }else if (comparedPassword) {
            let hashedPassword = bcrypt.hashSync(newPassword, 10)
            user.password = hashedPassword
            user.save()
            .then((result)=>{
                console.log(result);
                res.status(200).json({ message: "Password changed successfully" })
            })
            .catch((err)=>{
                console.log(err);
                res.status(500).json({ message: "Internal server error" })
            })
        }else{
            res.status(401).json({ message: "Invalid password" })
        }
    }
}

const generateRandom = () => {
    let gsmText = ""
    let smText = "abcdefghijklmnopqrstuvwxyz"
    for (let index = 0; index < 2; index++) {
        gsmText += smText.charAt(Math.floor(Math.random() * smText.length))
    }

    let gcaText = ""
    let caText = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for (let index = 0; index < 3; index++) {
        gcaText += caText.charAt(Math.floor(Math.random() * caText.length))
    }

    let gnoText = ""
    let noText = "1234567890"
    for (let index = 0; index < 2; index++) {
        gnoText += noText.charAt(Math.floor(Math.random() * noText.length))
    }

    let gspText = ""
    let spText = "!@#$%^&*()*+,-./"
    for (let index = 0; index < 2; index++) {
        gspText += spText.charAt(Math.floor(Math.random() * spText.length))
    }

    let randomText = `${gsmText}${gcaText}${gnoText}${gspText}`

    return randomText
}

const sendMail = (email, html) =>{
    const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
    
  }
})
let mailOption = {
        from: process.env.EMAIL,
        to: email,
        subject: "From my bank email",
        html: html
}

    transporter.sendMail(mailOption, (err, result) =>{
        if (err) {
            console.log(err);
        }else {
            console.log("Mail sent");
        }
    })
}

// const getMonifyToken = () => {
//     return new Promise((resolve, reject) => {
//         // const apiurl = "https://api.
//         const requestData = {}
//         const apiKey = process.env.MFI_KEY
//         const clientSecret = process.env.MFI_SECRET

//     })
// }

module.exports = {
    welcomeUser, about, login, register, registerUser, loginUser, dashboard, resetPass, changePassword
}

