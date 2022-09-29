import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
//!REGISTER

export const register = async (req, res) => {
    try {
        const { username, password } = req.body;

        const isUsed = await User.findOne({ username });

        if (isUsed) {
            return res.status(400).json({
                message: `User with username ${username} already exist`,
            })
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const newUser = new User({
            username,
            password: hash,
        });

        const token = jwt.sign(
            {
                id: newUser._id,
            },
            process.env.JWT_SECRET,
            { expiresIn: '30d' },
        )

        await newUser.save();

        res.json({
            newUser,
            token,
            message: `User was created`,
        });
    } catch (error) {
        res.json({ message: 'Server error' });
    }
};

//!LOGIN
export const login = async (req, res) => {
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username})
        if (!user) {
            return res.status(404).json({message: "User not found"})
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({message: "Invalid password"})
        }
        const token = jwt.sign({
                id: user._id,

            }, process.env.JWT_SEC,
            {expiresIn: "30d"})
        res.json({
            token,
            user,
            message: "You are logged in"
        })

    } catch (err) {
        res.send({message: "Server error"})
    }
}
//!GET ME
export const getMe = async (req, res) => {
    try {
        const user = await User.findById(req.userId)
        if (!user) {
            return res.status(404).json({message: "User not found"})
        }
        const token = jwt.sign({
                id: user._id,

            }, process.env.JWT_SEC,
            {expiresIn: "30d"})
        res.json({
            user,
            token,

        })

    } catch (err) {
        res.send({message: "Server error"})
    }
}