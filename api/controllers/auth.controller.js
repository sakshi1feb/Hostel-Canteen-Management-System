import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
    const { userName, email, mobileNumber, password } = req.body;
        //  console.log(req.body);
    if(
        !userName ||
        !email ||
        !mobileNumber ||
        !password ||
        userName === "" ||
        email === "" ||
        mobileNumber === "" ||
        password === ""
    ){
        return res.status(400).json({ message: "All fields are required" });
    }

        const hashedPassword = bcryptjs.hashSync(password, 10);

        const newUser = new User({
            userName,
            email,
            mobileNumber,
            password: hashedPassword,
        });
        try{
            await newUser.save();
            res.json('Signup successful');
        }catch(error){
            res.status(500).json({ message: error.message });

        };
    };
