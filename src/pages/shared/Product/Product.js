import { Grid } from "@mui/material";
import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function Product(props) {
    const {name, img, desc, price} = props.product;

    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="170"
                    image={img}
                    alt="green iguana"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {desc.substring(0, 100)}...
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{display: 'flex', justifyContent: 'space-around'}}>
                    <Typography sx={{fontWeight: 'bold', color: '#3c4758'}} >
                        {'$'+price}
                    </Typography>
                    <Button variant="contained" size="small" sx={{backgroundColor: '#233142'}}>
                        Purchase
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Product;