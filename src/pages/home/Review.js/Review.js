import React from "react";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { Rating } from "@mui/material";

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '80px',
    maxHeight: '',
    borderRadius: '50%'
  });

function Review() {
    return (
        <Paper variant="outlined" sx={{ p: 2, margin: '25px', flexGrow: 1, maxWidth: 'auto', textAlign: 'left' }}>
            <Grid container spacing={2}>
                <Grid item>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                        <Img alt="complex" src="https://cdn.stamped.io/uploads/customers/ZG9vZGVyc3JhZ2VAZ21haWwuY29t.jpg" />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="h5" component="div" sx={{margin: 0}}>
                                Standard license
                            </Typography>
                    <Rating name="read-only" value={5} readOnly />
                            <Typography variant="body2" gutterBottom>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio beatae tenetur, architecto officia molestiae voluptatum, magnam id consequatur enim quod eos dolor quasi! Reprehenderit magnam quam accusamus cumque ut ea non aperiam maxime, perspiciatis eum rem, sequi id tempora architecto!
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                
                            </Typography>
                        </Grid>
                    </Grid>
                <Grid item>
                </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default Review;