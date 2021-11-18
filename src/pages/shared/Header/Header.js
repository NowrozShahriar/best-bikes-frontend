// import react from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

function Header() {
    const {user} = useAuth();
    return ( 
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{backgroundColor: 'rgb(17, 30, 46, 0.980)'}}>
                <Toolbar>
                    {/* <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton> */}
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/" style={{textDecoration: "none", color: "white"}}>
                            Best Bikes
                        </Link>
                    </Typography>
                    {
                        user?.email ?
                        <Link to="/dashboard" style={{color: "white"}}>
                            <Button color="inherit">Dashboard</Button>
                        </Link> : 
                        <Link to="/login" style={{color: "white"}}>
                            <Button color="inherit">LogIn</Button>
                        </Link> 
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;