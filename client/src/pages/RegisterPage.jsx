import { useState,createContext,useContext } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function RegisterPage() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signup, isAuthenticated, errors: RegisterError  } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if(isAuthenticated){
            navigate('/tasks');
        }
    }, [isAuthenticated])
    
    const onSubmited = handleSubmit(async (values) => {
        signup(values)
    })
    return (
        <>
            <div className="bg-zinc-700 max-w-md p-10 rounded-md">

                {
                    RegisterError.map((error,i)=>{
                        <div className="bg-red-500 text-white p-2 rounded-md" key={i}>
                            {error}
                        </div>

                    })
                }

                <form onSubmit={handleSubmit(async (values) => {
                    console.log(values)
                    const res = await signup(values);
                    console.log(res)
                })}>
                    <input type="text" {...register("username", { required: true })} placeholder="username"  className="w-full bg-zinc-600 text-white px-4 py-4 rounded-md my-2"/>
                    {
                        errors.username && (
                            <p className="text-red-500">Username is Required</p>
                        )
                    }
                    <input type="email" {...register("email", { required: true })} placeholder="email"  className="w-full bg-zinc-600 text-white px-4 py-4 rounded-md my-2" />
                    {
                        errors.email && (
                            <p className="text-red-500">Email is Required</p>
                        )
                    }
                    <input type="password" {...register("password", { required: true })} placeholder="password"  className="w-full bg-zinc-600 text-white px-4 py-4 rounded-md my-2" />
                    {
                        errors.password && (
                            <p className="text-red-500">Password is Required</p>
                        )
                    }
                    <button type="submit" className="rounded bg-blue-500 hover:bg-slate-700 text-white font-bold py-2 px-4">Register</button>
                </form>
            </div>
        </>
    )
}
