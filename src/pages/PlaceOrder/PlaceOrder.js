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
        console.log(purchase);
        reset();
    }

    return (
        <div className="purchase">
            <form onSubmit={handleSubmit(onSubmit)}>
                <p>Purchase: {id}</p>
                {placed ? 
                <><h2>Order placed successfully.</h2><p>Go to <strong>My Orders</strong> to see all of your orders.</p></> : 
                <><p></p>
                <input placeholder="Your Name" {...register("userName", {required: true})} />
                <input placeholder="Your Email" defaultValue={user.email} {...register("userEmail", {required: true})} />
                <textarea placeholder="Address" {...register("address")} />
                <input type="number" placeholder="phone number" {...register("phone", {required: true})} />
                <input className="purchase-button" type="submit" value="Purchase" /></>}
            </form>
        </div>
    );
};

export default PlaceOrder;