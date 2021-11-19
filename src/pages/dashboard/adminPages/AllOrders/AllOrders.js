import { Alert } from "@mui/material";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";

function AllOrders() {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [updated, setUpdated] = useState(false);
    const [removed, setRemoved] = useState(false);
    
    useEffect(() => {
        fetch('https://evening-lake-73407.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [user.email])

    const handleShipping = (_id) => {
        const condition = window.confirm('Update product status to "Shipped"?');
        if (condition) {
            axios.put('https://evening-lake-73407.herokuapp.com/orders', {_id})
            .then(res => {
                if(res.data.modifiedCount) {
                    setUpdated(true);
                }
            })
        }
    }

    const handleRemove = (_id) => {
        const condition = window.confirm('Cancel an order?');
        if (condition) {
            axios.delete('https://evening-lake-73407.herokuapp.com/orders', {data: {id: _id}})
            .then(res => {
                if(res.data.deletedCount) {
                    setRemoved(true);
                }
            })
        }
    }


    return (
        <div>
            <h2>Manage All Orders</h2>
            {updated && <Alert sx={{marginTop: "20px"}} severity="success">Order has been updated successfully.</Alert>}
            {removed && <Alert sx={{marginTop: "20px"}} severity="success">One order has been canceled.</Alert>}
            <TableContainer component={Paper} sx={{}}>
                <Table aria-label="Manage Orders">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" >Name</TableCell>
                            <TableCell align="center">Product</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Phone</TableCell>
                            <TableCell align="center">Address</TableCell>
                            <TableCell align="center">Status</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {orders.map((row) => (
                        <TableRow
                        key={row._id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell align="center" component="th" scope="row">
                            {row.userName}
                        </TableCell>
                        <TableCell align="center">{row.productName}</TableCell>
                        <TableCell align="center">{row.userEmail}</TableCell>
                        <TableCell align="center">{row.phone}</TableCell>
                        <TableCell align="center">{row.address}</TableCell>
                        <TableCell align="center">{row.status}</TableCell>
                        <TableCell align="center">
                            <button onClick={()=>{handleShipping(row._id)}} className=".button">Ship</button>
                            <button onClick={()=>{handleRemove(row._id)}} className=".button">Cancel</button>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default AllOrders;