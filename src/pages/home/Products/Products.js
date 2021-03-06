import { Container, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from "react";
import Product from "../../shared/Product/Product";

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://evening-lake-73407.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <Box sx={{ flexGrow: 1, margin: "30px 0" }}>
            <Container align="center">
                <Typography variant="h4" sx={{color: "#32373c", margin: "10px"}} >Our Best Seller Products</Typography>
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