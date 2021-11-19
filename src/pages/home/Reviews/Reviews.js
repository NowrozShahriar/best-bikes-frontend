import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import Review from "../Review/Review";

function Reviews() {
    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
    return (
        <Container>
            <h1 style={{color: "#32373c", fontWeight: "normal"}}>Reviews</h1>
            {
                reviews.map(data => <Review 
                    key={data._id} 
                    data={data}
                    ></Review>
                )
            }
        </Container>
    );
};

export default Reviews;