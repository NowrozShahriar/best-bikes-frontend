import { Container } from "@mui/material";
import React from "react";
import Review from "../Review/Review";

function Reviews() {
    return (
        <Container>
            <h1 style={{color: "#32373c", fontWeight: "normal"}}>Reviews</h1>
            <Review></Review>
            <Review></Review>
        </Container>
    );
};

export default Reviews;