import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { 
  Switch,
  Route, 
  Link,
  useRouteMatch 
} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import MyOrders from '../userPages/MyOrders/MyOrders';
import MakeAdmin from '../adminPages/MakeAdmin/MakeAdmin';
import Payment from '../userPages/Payment/Payment';
import AddReview from '../userPages/AddReview/AddReview';
import AllOrders from '../adminPages/AllOrders/AllOrders';
import AddProduct from '../adminPages/AddProduct/AddProduct';
import ManageProducts from '../adminPages/ManageProducts/ManageProducts';

const drawerWidth = 240;

function Dashboard(props) {
  const { user, logOut } = useAuth();
  let { path, url } = useRouteMatch();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <List>
        <ListItem>
          <h3 style={{margin: "1px"}}>{user.email}</h3>
        </ListItem>
        
      </List>
      <Divider />
      <List>
          <ListItem button>
            <Link to={`${url}`} style={{color: "black"}} >
              <ListItemText primary="My Orders" />
            </Link>
          </ListItem>
          <ListItem button>
            <Link to={`${url}/payment`} style={{color: "black"}} >
              <ListItemText primary="Pay" />
            </Link>
          </ListItem>
          <ListItem button>
            <Link to={`${url}/add-review`} style={{color: "black"}} >
              <ListItemText primary="Review" />
            </Link>
          </ListItem>

          <ListItem button>
            <Link to={`${url}/all-orders`} style={{color: "black"}} >
              <ListItemText primary="Manage Orders" />
            </Link>
          </ListItem>
          <ListItem button>
            <Link to={`${url}/manage-products`} style={{color: "black"}} >
              <ListItemText primary="Manage Products" />
            </Link>
          </ListItem>
          <ListItem button>
            <Link to={`${url}/add-product`} style={{color: "black"}} >
              <ListItemText primary="Add Product" />
            </Link>
          </ListItem>
          <ListItem button>
            <Link to={`${url}/make-admin`} style={{color: "black"}} >
              <ListItemText primary="Make Admin" />
            </Link>
          </ListItem>
        
      </List>
      <Divider />
      <List>
          <ListItem button>
            <ListItemText onClick={logOut} color="inherit">LogOut</ListItemText>
          </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` }, backgroundColor: 'rgb(17, 30, 46, 0.980)'
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <Link to="/" style={{textDecoration: "none", color: "white"}}>
                Best Bikes
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, minHeight: "79vh" }}
      >
        {/* <Toolbar /> */}
          <Box  sx={{}}>
            <Switch>
              <Route exact path={path}>
                <MyOrders></MyOrders>
              </Route>
              <Route path={`${path}/payment`}>
                <Payment></Payment>
              </Route>
              <Route path={`${path}/add-review`}>
                <AddReview></AddReview>
              </Route>

              <Route path={`${path}/all-orders`}>
                <AllOrders></AllOrders>
              </Route>
              <Route path={`${path}/manage-products`}>
                <ManageProducts></ManageProducts>
              </Route>
              <Route path={`${path}/add-product`}>
                <AddProduct></AddProduct>
              </Route>
              <Route path={`${path}/make-admin`}>
                <MakeAdmin></MakeAdmin>
              </Route>
            </Switch>
          </Box>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
