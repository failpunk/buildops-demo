import React, { useState } from 'react';
import { Grid, TextField } from '@material-ui/core';

export default function EmployeeInput({ onChange }) {
    let [user, setUser] = useState({ firstname: '', lastname: '' });

    function updateFirstname({ target }) {
        updateValue('firstname', target.value);
    }

    function updateLastname({ target }) {
        updateValue('lastname', target.value);
    }

    function updateValue(key, value) {
        const updatedState = { ...user, [key]: value };
        setUser(updatedState);
        onChange(updatedState);
    }

    return (
        <Grid container spacing={3} className="margin-bottom-2">
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    name="firstname"
                    label="First name"
                    fullWidth
                    autoComplete="fname"
                    onChange={updateFirstname}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    name="lastname"
                    label="Last name"
                    fullWidth
                    autoComplete="lname"
                    onChange={updateLastname}
                />
            </Grid>
        </Grid>
    );
}
