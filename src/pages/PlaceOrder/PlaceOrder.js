import React from "react";
import { useParams } from "react-router";
import "./PlaceOrder.css"

function PlaceOrder() {
    const {id} = useParams();

    return (
        <h1>PlaceOrder {id}</h1>
    );
};

export default PlaceOrder;