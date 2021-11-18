import { LinearProgress } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Login.css"

function Login() {
    const { register, handleSubmit} = useForm();
    const { loginUser, isLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const onSubmit = data => {
        const loginData = {
            email: data.userEmail,
            password: data.password
        }
        loginUser(loginData.email, loginData.password, location, history);
    }
    return (
        <div className="login">
            <h1>Login</h1>
            {isLoading ? 
            <LinearProgress /> : 
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" placeholder="Email" {...register("userEmail", { required: true })} />
                <input type="password" placeholder="Password" {...register("password", { required: true, minLength: 6 })} />
                <input className="login-button" type="submit" value="Log In" />
                <Link to="/register" >
                    <button className="login-toggle">New User? Click Here To Register</button>
                </Link>
            </form>}
        </div>
        
    );
};

export default Login;