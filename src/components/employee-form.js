import React from 'react';
import { useFormState } from 'react-use-form-state';
import { Button, Divider, TextField } from '@material-ui/core';
import { API, graphqlOperation } from 'aws-amplify';
import { createEmployee } from '../graphql/mutations';

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

        const { values, validity } = formState;

        createNewEmployee(values);
    }

    async function createNewEmployee(formValues) {
        console.log('createEmployee', formValues);

        try {
            const postData = await API.graphql(
                graphqlOperation(createEmployee, { input: formValues })
            );

            console.log('postData', postData);
        } catch (err) {
            console.log('ERROR CREATING ADDRESS', err);
        }
    }
}
