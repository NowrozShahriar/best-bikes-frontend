import { LinearProgress } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Register.css"

function Register() {
    const { register, handleSubmit} = useForm();
    const { registerUser, isLoading } = useAuth();
    const history = useHistory()

    const onSubmit = data => {
        if (data.password !== data.confirmPassword) {
            alert('Passwords didn\'t match!')
            return;
        }
        const loginData = {
            // displayName: data.userName,
            email: data.userEmail,
            password: data.password
        }
        registerUser(loginData.email, loginData.password, history);
    }


    return (
        <div className="register">
            <h1>Register</h1>
            {isLoading ? 
            <LinearProgress /> : 
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* <input placeholder="Your Name" onBlur="" {...register("userName", { required: true })} /> */}
                <input type="email" placeholder="Your Email" {...register("userEmail", { required: true })} />
                <input type="password" placeholder="New Password" {...register("password", { required: true, minLength: 6 })} />
                <input type="password" placeholder="Confirm Password" {...register("confirmPassword", { required: true, minLength: 6 })} />
                <input className="register-button" type="submit" value="Register" />
                <Link to="/login" >
                    <button className="login-toggle">Already A  User? Click Here To Login</button>
                </Link>
            </form>}
        </div>
        
    );
};

export default Register;