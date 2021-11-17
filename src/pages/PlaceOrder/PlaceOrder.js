import { Alert } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import "./PlaceOrder.css"

function PlaceOrder() {
    const {id} = useParams();
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const [placed, setPlaced] = useState(false);

    const onSubmit = data => {
        let purchase = window.confirm("Confirm Purchase?");
        if (purchase) {
            const orderInfo = {
                productName: id,
                userName: data.userName, 
                userEmail: data.userEmail, 
                address: data.address, 
                phone: data.phone,
                status: 'pending'
            }
            console.log(orderInfo);
            fetch('http://localhost:5000/orders', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orderInfo)
            })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setPlaced(true);
                }
            })
        }
        reset();
    }

    return (
        <div className="purchase">
            <form onSubmit={handleSubmit(onSubmit)}>
                <p>Purchase: {id}</p>
                {!placed ? 
                <><Alert sx={{marginTop: "20px"}} severity="success">Order placed successfully.</Alert><p>Go to <strong>My Orders</strong> to see all of your orders.</p></> : 
                <><p></p>
                <input placeholder="Your Name" {...register("userName", {required: true})} />
                <input placeholder="Your Email" defaultValue={user.email} {...register("userEmail", {required: true})} />
                <textarea placeholder="Address" {...register("address", {required: true})} />
                <input type="number" placeholder="phone number" {...register("phone", {required: true})} />
                <input className="purchase-button" type="submit" value="Purchase" /></>}
            </form>
        </div>
    );
};

export default PlaceOrder;