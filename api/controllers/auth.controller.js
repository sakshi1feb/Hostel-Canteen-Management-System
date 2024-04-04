import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
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
        next(errorHandler(400, "All fields are required"));
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
            next(error);
        };
    };
