import mongoose, { Mongoose } from "mongoose";


const userSchema= new mongoose.Schema({
    username: {
    type: String,
    required: true,
    trim: true 
    },

    email : {
        type: String,
        unique: true,
        require : true,
        trim : true
    },

    password:{
        type: String,
        minlength:[6,"La contraseña debe ser de mas de 6 letras."],
        maxlength:[1280],
        require: true
    }
},
    {
    timestamps:true
    }
);

export default mongoose.model("User", userSchema);