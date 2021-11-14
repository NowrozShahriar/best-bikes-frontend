import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from "@mui/material";
import Product from "../../shared/Product/Product";

const products = [
    {
        "name": "Polygon Siskiu D7",
        "img": "https://www.bikesonline.com/assets/thumbL/4888999.jpg?20210317031421&tr=w-250,h-250",
        "desc": "The new 2021 Polygon Siskiu D7 has become one of the most popular and highest selling dual-suspension bikes for Polygon. Capitalizing on extensive R & D, state of the art testing facilities, and feedback from top-level riders, the Polygon Sikiu D7 defies what an outstanding value dual-suspension mountain bike is capable of. This year's host of upgrades tick all the boxes for those looking for a bike with modern geometry, great XC pedaling efficiency, and all-mountain capability.",
        "price": "1699"
    },
    {
        "name": "Polygon Siskiu T7",
        "img": "https://www.bikesonline.com/assets/thumbL/4885599.jpg?20210317031443&tr=w-250,h-250",
        "desc": "The Polygon Siskiu T delivers the ultimate value for money trail bike that modern riders have been waiting for. The latest evolution of the Siskiu Trail series opens any trail to any rider through encompassing progressive geometry into an attainable package. From all-day epics to hot laps of your local loop, the Siskiu T delivers confident yet lively handling on everything from punchy climbs to rowdy descents as you push the limits of traction.",
        "price": "1999"
    },
    {
        "name": "Polygon Relic 24",
        "img": "https://www.bikesonline.com/assets/thumbL/AIAPX24RLC12G1.jpg?20210317031421&tr=w-250,h-250",
        "desc": "Kids love the look of the Relic 24\", with its front disc brakes, shimano gears and front suspension. The bike performs as good as it looks too, with quality components throughout - from the threaded headset (the same type that is used on all \"proper\" bikes), to the alloy brake levers, rather than plastic, as found on department store bikes.",
        "price": "499"
    },
    {
        "name": "Polygon Siskiu D5",
        "img": "https://www.bikesonline.com/assets/thumbL/SISKIU_D5_2022.jpg?20210713225156&tr=w-250,h-250",
        "desc": "Thanks to modern geometry, Polygons Siskiu D series takes 120mm of travel and makes it unbelievably capable. A slacker head angle, longer reach, and steeper seat angle make the D series perfect for riders looking to tackle any ride. The D5 is an entry point into MTB and will show the path of exploration.",
        "price": "1199"
    },
    {
        "name": "Polygon Premier",
        "img": "https://www.bikesonline.com/assets/thumbL/887766.jpg?20211021221021&tr=w-250,h-250",
        "desc": "Designed for children who've outgrown their 20 inch bike and are ready to further explore their neighborhood and gain independence, the Polygon Premier 24 is the ideal lightweight all-terrain bike for your 7 to 11-year-old. As they venture further into their widening world, the practicality of a lightweight bike combined with intuitive gearing and hassle-free, safe v-brakes lets them focus on the adventure and gives us parents peace of mind. ",
        "price": "349"
    },
    {
        "name": "Polygon Xtrada 5",
        "img": "https://www.bikesonline.com/assets/thumbL/6489546.jpg?20210317031550&tr=w-250,h-250",
        "desc": "So, you're new to mountain biking and want a high-value bike with progressive modern geometry that's perfect for local XC trails, racing or multi-day adventures? The new 2021 Xtrada is the ticket to all of it - a versatile, capable and lightweight Aluminum hardtail bike that will take you anywhere you want to go.",
        "price": "799"
    },
    {
        "name": "Polygon Xtrada 7",
        "img": "https://www.bikesonline.com/assets/thumbL/6489548.jpg?20210317031357&tr=w-250,h-250",
        "desc": "So, you're new to mountain biking and want a high-value bike with progressive modern geometry that's perfect for local XC trails, racing or multi-day adventures? The new 2021 Xtrada is the ticket to all of it - a versatile, capable and lightweight Aluminum hardtail bike that will take you anywhere you want to go.",
        "price": "1099"
    },
    {
        "name": "Polygon Trid Dirt",
        "img": "https://www.bikesonline.com/assets/thumbL/AITPX26TRD13G1.jpg?20210317031452&tr=w-250,h-250",
        "desc": "Introducing the new 2021 Polygon Trid! Developed, tested, and tweaked by Sam Reynolds himself, the new Polygon Trid continues its successful formula combining a bombproof alloy frame with a spec sheet you can depend on.",
        "price": "1199"
    },
    {
        "name": "Polygon Cascade",
        "img": "https://www.bikesonline.com/assets/thumbL/6537158.jpg?20210317031600&tr=w-250,h-250",
        "desc": "The Cascade 4 borrows much of its technology from the highly popular Polygon Premier series from last year and delivers a truly capable all rounder - whether you want to explore your local parks and trails or use as a reliable commuter around town.",
        "price": "599"
    },
    {
        "name": "Polygon Premier 4",
        "img": "https://www.bikesonline.com/assets/thumbL/6537155.jpg?20210317031600&tr=w-250,h-250",
        "desc": "The Premier 4 was created for riders who want a versatile mountain bike. Built with a lightweight and durable Alutech frame with modern geometry for a more comfortable leisure ride, the Premier 4 is a reliable companion for day-to-day use and sport.",
        "price": "599"
    }
]

function Products() {
    return (
        <Box sx={{ flexGrow: 1, margin: "30px 0" }}>
            <Container align="center">
                <Typography variant="h4" sx={{color: "#32373c", margin: "10px"}} >Our Products</Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {products.slice(0, 6).map(product => <Product
                    key={product.name}
                    product={product}
                    ></Product>
                    )}
                </Grid>
            </Container>
        </Box>
    );
};

export default Products;