import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import './Banner.css'

function Banner() {
    return (
        <div className="banner">
            <div>
                <h1>Get the highest rated bikes online.</h1>
                <Link to="/all-products"><Button
                sx={{color: "white", borderColor: "white"}}
                variant="outlined">Explore</Button></Link>
            </div>
        </div>
    );
};

export default Banner;