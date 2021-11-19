import { Alert } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

function AddProduct() {
    const {register, handleSubmit, reset} = useForm();
    const [success, setSuccess] = useState(false);

    const onSubmit = data => {
        axios.post('http://localhost:5000/products', data)
        .then(res => {
            if (res.data.insertedId) {
                setSuccess(true);
            }
        })
        reset();
    }

    return (
        <div>
            <h2>Add Product</h2>
            {success && <Alert sx={{marginTop: "20px"}} severity="success">Product added successfully.</Alert>}
            <form onSubmit={handleSubmit(onSubmit)} style={{display: "flex", flexDirection: "column"}}>
                <input placeholder="Product Name" {...register("name", { required: true })} />
                <input placeholder="Product Image (url)"  {...register("img")} />
                <input type="number" placeholder="Price" {...register("price", { required: true })} />
                <textarea placeholder="Product Description" {...register("desc", { required: true })} />
                <input type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;