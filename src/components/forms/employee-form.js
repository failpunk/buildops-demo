import React, { useEffect, useState } from 'react';
import { useFormState } from 'react-use-form-state';
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import ChipInput from 'material-ui-chip-input';
import Api from '../../services/api.service';
import AddressForm from './address-form';

export default function EmployeeForm({ onFormSubmit }) {
    const [formState, { text, raw }] = useFormState({ address: [] });
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        addNewAddress();
    }, []);

    function addNewAddress() {
        const name = 'name' + Date.now();

        formState.setField('address', [
            ...formState.values.address,
            { name, values: {} }
        ]);
    }

    function updateAddress({ name, values }) {
        const addressList = [...formState.values.address];

        const indexOfAddress = addressList.findIndex(
            address => address.name === name
        );

        addressList[indexOfAddress].values = values;

        formState.setField('address', addressList);
    }

    function removeAddress(name) {
        const filteredAddresses = formState.values.address.filter(
            address => address.name !== name
        );

        formState.setField('address', filteredAddresses);
    }

    return (
        <form onSubmit={submitForm}>
            <Typography variant="h6" gutterBottom>
                Employee Name
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
            </Grid>

            <div className="margin-2">
                {formState.values.address.map(address => {
                    return (
                        <AddressForm
                            key={address.name}
                            name={address.name}
                            onRemoveAddress={removeAddress}
                            {...raw({
                                name: address.name,
                                onChange: updateAddress
                            })}
                        />
                    );
                })}

                <Box m={2} style={{ textAlign: 'center' }}>
                    <Button variant="contained" onClick={addNewAddress}>
                        Add Another Address
                    </Button>
                </Box>
            </div>

            <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                    Employee Skills
                </Typography>
                <ChipInput
                    label="Enter a skill and press enter"
                    placeholder="html, css, kungfu"
                    fullWidth
                    onChange={chips => setSkills(chips)}
                />
            </Grid>

            <Grid item container justify="center" xs={12} className="margin-2">
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </Grid>
        </form>
    );

    function submitForm(event) {
        event.preventDefault();

        const { values } = formState;

        let addressList = values.address.map(address => {
            return {
                line1: address.values.line1,
                line2: address.values.line2,
                city: address.values.city,
                state: address.values.state,
                zipcode: address.values.zipcode
            };
        });

        let formattedSkills = skills.map(skill => {
            return { name: skill };
        });

        let employeeData = {
            firstname: values.firstname,
            lastname: values.lastname,
            address: addressList,
            skills: formattedSkills
        };

        createNewEmployee(employeeData);
    }

    async function createNewEmployee(formValues) {
        try {
            await Api.createEmployee(formValues);
            onFormSubmit();
        } catch (err) {
            console.log('ERROR CREATING ADDRESS', err);
        }
    }
}
