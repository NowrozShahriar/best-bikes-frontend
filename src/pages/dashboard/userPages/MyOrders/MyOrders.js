import React, { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function MyOrders() {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    
    useEffect(() => {
        const url = `http://localhost:5000/orders?email=${user.email}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [user.email])


    return (
        <div>
            <h2>My Orders</h2>
            <TableContainer component={Paper} sx={{}}>
                <Table aria-label="Manage Orders">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" >Name</TableCell>
                            <TableCell align="center">Product</TableCell>
                            <TableCell align="center">Phone</TableCell>
                            <TableCell align="center">Address</TableCell>
                            <TableCell align="center">Status</TableCell>
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
                        <TableCell align="center">{row.phone}</TableCell>
                        <TableCell align="center">{row.address}</TableCell>
                        <TableCell align="center">{row.status}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default MyOrders;