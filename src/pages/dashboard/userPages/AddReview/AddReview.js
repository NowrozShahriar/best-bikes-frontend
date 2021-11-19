import { Alert } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";

function AddReview() {
    const {register, handleSubmit, reset} = useForm();
    const { user } = useAuth();
    const [success, setSuccess] = useState(false);

    const onSubmit = data => {
        axios.post('https://evening-lake-73407.herokuapp.com/reviews', data)
        .then(res => {
            if (res.data.insertedId) {
                setSuccess(true);
            }
        })
        reset();
    }

    return (
        <div>
            <h2>Add Review</h2>
            {success && <Alert sx={{marginTop: "20px"}} severity="success">Review added successfully.</Alert>}
            <form onSubmit={handleSubmit(onSubmit)} style={{display: "flex", flexDirection: "column"}}>
                <input type="text" placeholder="Name" {...register("name", { required: true })} />
                <input type="email" placeholder="Email" defaultValue={user.email} {...register("email", { required: true})} />
                <input type="number" placeholder="Rate 1 to 5" {...register("rating", { required: true, min: 1, max: 5 })} />
                <textarea placeholder="Write a review" {...register("review")} />
                <input type="submit" value="Submit Review" />
            </form>
        </div>
    );
};

export default AddReview;