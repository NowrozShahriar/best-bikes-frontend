import React from "react";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import Reviews from "../Reviews/Reviews";
import Welcome from "../Welcome/Welcome";

function Home() {
    return (
        <div style={{textAlign: "center"}}>
            <Banner></Banner>
            <Welcome></Welcome>
            <Products></Products>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;