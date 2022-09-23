import User from "../models/User.js";
import bcrypt from "bcryptjs";
//!REGISTER
export const register = async (req, res) => {
    try {
        const {username, password} = req.body;
        const isUsed = await User.findOne({username})
        if (isUsed) {
            return res.status(400).json({message: `User with username ${username} already exist`})
        }
        const salt = bcrypt.genSaltSync(8);
        const hash = bcrypt.hashSync(password, salt);
        const newUser = new User({
            username,
            password: hash,
        })
        await newUser.save();
        return res.status(200).json({
            newUser,
            message: `User was created`})

    } catch (err) {

        console.log(err)
    }
}
//!LOGIN
export const login = async (req, res) => {
    try {
    } catch (err) {
         res.send({message: "Server error"})
    }
}
//!GET ME
export const getMe = async (req, res) => {
    try {

    } catch (err) {

        console.log(err)
    }
}