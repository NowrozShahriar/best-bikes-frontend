import React, { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";
import { Alert } from "@mui/material";

function ManageProducts() {
    const { user } = useAuth();
    const [products, setProducts] = useState([]);
    const [success, setSuccess] = useState(false);
    
    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [user.email])

    const handleRemove = (_id) => {
        const condition = window.confirm('Remove a product?');
        if (condition) {
            axios.delete('http://localhost:5000/products', {data: {id: _id}})
            .then((res)=> {
                if(res.data.deletedCount) {
                    setSuccess(true);
                }
            })
        }
    }

    return (
        <div>
            <h2>Manage Products</h2>
            {success && <Alert sx={{marginTop: "20px"}} severity="success">One item has been removed.</Alert>}
            <TableContainer component={Paper} sx={{}}>
                <Table aria-label="Manage Products">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Product ID</TableCell>
                            <TableCell align="center">Product Name</TableCell>
                            <TableCell align="center">Price</TableCell>
                            <TableCell align="center">Edit</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {products.map((row) => (
                        <TableRow
                        key={row._id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell align="center" component="th" scope="row">
                            {row._id}
                        </TableCell>
                        <TableCell align="center">{row.name}</TableCell>
                        <TableCell align="center">{'$'+ row.price}</TableCell>
                        <TableCell align="center">
                            <button onClick={()=>{handleRemove(row._id)}} className=".button">Remove</button>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageProducts;