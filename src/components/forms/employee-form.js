import React, { useState } from 'react';
import { useFormState } from 'react-use-form-state';
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import ChipInput from 'material-ui-chip-input';
import Api from '../../services/api.service';

export default function EmployeeForm({ onFormSubmit }) {
    const [formState, { text }] = useFormState({});
    const [skills, setSkills] = useState([]);

    return (
        <form onSubmit={submitForm}>
            <Typography variant="h6" gutterBottom>
                Enter the new employee details
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        {...text('firstname')}
                        label="First name"
                        fullWidth
                        autoComplete="fname"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        {...text('lastname')}
                        label="Last name"
                        fullWidth
                        autoComplete="lname"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        {...text('line1')}
                        label="Address line 1"
                        fullWidth
                        autoComplete="billing address-line1"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        {...text('line2')}
                        label="Address line 2"
                        fullWidth
                        autoComplete="billing address-line2"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        {...text('city')}
                        label="City"
                        fullWidth
                        autoComplete="billing address-level2"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        {...text('state')}
                        label="State/Province/Region"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        {...text('zipcode')}
                        label="Zip / Postal code"
                        fullWidth
                        autoComplete="billing postal-code"
                    />
                </Grid>
                <Grid item xs={12}>
                    <ChipInput
                        label="Enter some employee skills"
                        placeholder="html, css, kungfu"
                        fullWidth
                        onChange={chips => setSkills(chips)}
                    />
                </Grid>
                <Grid item container justify="center" xs={12}>
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </form>
    );

    function submitForm(event) {
        event.preventDefault();

        const { values } = formState;

        let address = {
            line1: values.line1,
            line2: values.line2,
            city: values.city,
            state: values.state,
            zipcode: values.zipcode
        };

        let formattedSkills = skills.map(skill => {
            return { name: skill };
        });

        let employeeData = {
            firstname: values.firstname,
            lastname: values.lastname,
            address: [address],
            skills: formattedSkills
        };

        createNewEmployee(employeeData);
    }

    async function createNewEmployee(formValues) {
        console.log('createNewEmployee', formValues);

        try {
            await Api.createEmployee(formValues);
            onFormSubmit();
        } catch (err) {
            console.log('ERROR CREATING ADDRESS', err);
        }
    }
}
