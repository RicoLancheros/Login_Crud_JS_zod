import User from "../models/user.model.js"
import bcrypt from "bcryptjs";
import { createTokenAcess } from "../libs/jwt.js";



export const register = async (req, res) => {
    //Desestructurar el body a enviar
    const{email, password, username} = req.body;
    // console.log(email,password,username)
    // res.send('Registrando')

    try {

        const userFound = await User.findOne({email: email});
        if(userFound) return res.status(400).json({message: 'User already exists'})

        const passwordHash = await bcrypt.hash(password, 10)
        const newUser =  new  User({
            username,
            email,
            password:passwordHash
        });
        
        const userSave = await newUser.save();
        const token = await createTokenAcess({id: userSave._id})
        res.cookie('token', token)
        res.status(201).json({
            id: userSave._id,
            username:userSave.username,
            email : userSave.email
        })

    } catch (error) {
        res.status(500).json({message: error.message})
    }
};


export const login = async (req, res) => {
    const {email, password} = req.body;
    try {
        const userFound = await User.findOne({email: email});
        if(!userFound) return res.status(400).json({message: 'User not found'})
        const isMatch = await bcrypt.compare(password, userFound.password);
        if(!isMatch) return res.status(400).json({message: 'Error in credentials'})
        const token = await createTokenAcess({id: userFound._id})
        res.cookie('token', token)
        res.status(200).json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


export const logout = async (req, res) => {
    res.clearCookie('token',"",{
        expires: new Date(0),
    });
    return res.sendStatus(200);
}

export const profile = async (req, res) => {
    const userFound = await User.findById(req.user.id).select('-password');
    if(!userFound) return res.status(400).json({message: 'User not found'})

    res.status(200).json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email
    }) 
  
}