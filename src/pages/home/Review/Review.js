import React from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Rating } from "@mui/material";


function Review({data}) {
    const {name, email, rating, review} = data;

    return (
        <Paper variant="outlined" sx={{ p: 2, margin: '25px', flexGrow: 1, maxWidth: 'auto', textAlign: 'left' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="h5" component="div" sx={{margin: 0}}>
                                {name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {email}
                            </Typography>
                            <Rating name="read-only" value={parseInt(rating)} readOnly />
                            <Typography variant="body2" gutterBottom>
                                {review}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default Review;