import { Alert, Button, TextField } from "@mui/material";
import React, { useState } from "react";

function MakeAdmin() {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    function handleOnBlur(e) {
        setEmail(e.target.value);
    }

    function handleAdminSubmit(e) {
        e.preventDefault();
        const user = {email};
        fetch('https://evening-lake-73407.herokuapp.com/users', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount) {
                setSuccess(true);
            }
        })
    } 

    return (
        <div>
            <h2>Make Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField onBlur={handleOnBlur} type="email" label="Email" variant="outlined" />
                <Button type="submit" variant="contained" sx={{padding: "15px"}} >Make Admin</Button>
            </form>
            {success && <Alert sx={{marginTop: "20px"}} severity="success">Promoted to Admin successfully.</Alert>}
        </div>
    );
};

export default MakeAdmin;