import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";

function AddReview() {
    const {register, handleSubmit, reset} = useForm();
    const { user } = useAuth();

    const onSubmit = data => {
        console.log(data);
        // reset();
    }

    return (
        <div>
            <h2>Add Review</h2>
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