import React from 'react';
import { useFormState } from 'react-use-form-state';
import { Button, TextField } from '@material-ui/core';
import Api from '../services/api.service';

export default function EmployeeForm() {
    const [formState, { text }] = useFormState();

    return (
        <form onSubmit={submitForm}>
            <TextField
                {...text('firstname')}
                variant="outlined"
                required
                fullWidth
                label="First Name"
                autoFocus
            />

            <TextField
                {...text('lastname')}
                variant="outlined"
                required
                fullWidth
                label="Last Name"
            />
            <br />
            <br />

            <Button type="submit" variant="contained" color="primary">
                Submit
            </Button>
        </form>
    );

    function submitForm(event) {
        event.preventDefault();

        const { values } = formState;

        createNewEmployee(values);
    }

    async function createNewEmployee(formValues) {
        try {
            await Api.createEmployee(formValues);
        } catch (err) {
            console.log('ERROR CREATING ADDRESS', err);
        }
    }
}
