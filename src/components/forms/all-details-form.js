import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, makeStyles, Typography } from '@material-ui/core';
import SkillsInput from './skills-input';
import EmployeeInput from './employee-input';
import AddressInput from './address-input';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1)
    }
}));

export default function AllDetailsForm({
    employee = {},
    onFormSubmit,
    onCancel
}) {
    const classes = useStyles();

    const [user, setUser] = useState({});
    const [skills, setSkills] = useState([]);
    const [addressList, setAddressList] = useState([]);

    function updateUser(user) {
        setUser(user);
    }

    function updateSkills(skillList) {
        setSkills(skillList);
    }

    function updateAddress(name, address) {
        const otherAddresses = addressList.filter(
            address => address.name !== name
        );
        setAddressList([...otherAddresses, { name, values: address }]);
    }

    // Create a new address with a unique key to identify it
    function addNewAddress(address = {}) {
        const name = 'address' + Date.now();
        setAddressList([...addressList, { name, values: address }]);
    }

    function submitForm(event) {
        event.preventDefault();

        const employee = {
            ...user,
            address: addressList.map(address => address.values),
            skills: skills.map(skill => {
                return { name: skill };
            })
        };

        onFormSubmit(employee);
    }

    // Add one default address
    useEffect(() => {
        if (employee.firstname) {
            parseUser(employee);
        } else {
            addNewAddress();
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    function parseUser({ firstname, lastname, address, skills }) {
        updateUser({ firstname, lastname });
        updateSkills(skills.map(s => s.name));
        address.map(address => addNewAddress(address));
    }

    return (
        <React.Fragment>
            <form onSubmit={submitForm}>
                <Typography variant="h6" gutterBottom>
                    Name
                </Typography>

                <EmployeeInput employee={employee} onChange={updateUser} />

                <Typography variant="h6" gutterBottom>
                    Address
                </Typography>

                {addressList.map(address => {
                    return (
                        <AddressInput
                            key={address.name}
                            onChange={updateAddress}
                            address={address}
                        />
                    );
                })}

                <Box m={2} style={{ textAlign: 'center' }}>
                    <Button variant="contained" onClick={() => addNewAddress()}>
                        Add Another Address
                    </Button>
                </Box>

                <Typography variant="h6" gutterBottom>
                    Skills
                </Typography>

                <SkillsInput skills={employee.skills} onChange={updateSkills} />

                <Grid
                    item
                    container
                    justify="center"
                    xs={12}
                    className="margin-2"
                >
                    <Button
                        type="submit"
                        variant="contained"
                        className={classes.button}
                        color="primary"
                    >
                        Submit
                    </Button>
                    <Button
                        variant="contained"
                        className={classes.button}
                        onClick={onCancel}
                    >
                        Cancel
                    </Button>
                </Grid>
            </form>

            <pre>{JSON.stringify(user, null, 4)}</pre>
            <pre>{JSON.stringify(skills, null, 4)}</pre>
            <pre>{JSON.stringify(addressList, null, 4)}</pre>
        </React.Fragment>
    );
}
