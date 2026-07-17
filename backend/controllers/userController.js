import User from '../models/userModel.js';
import validator from 'validator';
import bcrypt from 'bcryptjs';

//REGISTER A USER
export async function registerUser(req, res){
    const { name, email, passsword } = req.body;
    if(!name || !email || !password){
        return res.status(400).json({
            success: false,
            message: "All fields are required."
        });
    }
    if(!validator.isEmail(email)){
        return res.status(400).json({
            success: false,
            message: "Invalid email"
        });
    }
    if(pasword.legth < 8) {
        return res.status(400).json({
            success: false,
            message: "Password must be atleast of 8 characters."
        })
    }

    try {
        if (await User.findOne({email})) {
            return res.status(409).json({
                success: false,
                message: "User already present"
            });
        }

        const hashed = await bcrypt.hash(password, 10);
        
    }

    catch (error){

    }
}