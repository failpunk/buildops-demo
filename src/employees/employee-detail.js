import React, { useEffect, useState } from 'react';
import {
    Box,
    CircularProgress,
    Fab,
    makeStyles,
    Typography
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

import EmployeeSkills from '../components/employee-skills';
import Api from '../services/api.service';

const useStyles = makeStyles(theme => ({
    listItem: {
        padding: theme.spacing(1, 0)
    },
    total: {
        fontWeight: '700'
    },
    title: {
        marginTop: theme.spacing(2)
    }
}));

const styles = {
    address: {
        marginBottom: '1rem'
    },

    addressLine: {
        margin: 0
    }
};

export default function EmployeeDetail({ employeeId }) {
    const classes = useStyles();

    console.log('classes', classes);

    const [employee, setEmployee] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    // Load existing employees.
    useEffect(() => {
        async function fetchEmployee() {
            const employee = await Api.getOneEmployee(employeeId);
            setEmployee(employee);
            setIsLoading(false);
        }

        try {
            setIsLoading(true);
            fetchEmployee();
        } catch (error) {
            console.log('error fetching one employee', employeeId, error);
        }
    }, [employeeId]);

    function deleteSkill(name) {
        console.log('TODO: delete skill', name);
    }

    return (
        <React.Fragment>
            {/* LOADING INDICATOR */}
            {isLoading && (
                <Box m={2} style={{ textAlign: 'center' }}>
                    <CircularProgress color="secondary" />
                </Box>
            )}

            {/* USER DATA */}
            {!isLoading && (
                <div>
                    <Fab
                        color="secondary"
                        aria-label="Edit"
                        className={classes.fab}
                    >
                        <EditIcon />
                    </Fab>
                    <Typography variant="h4">
                        {employee.firstname} {employee.lastname}
                    </Typography>
                    <Typography
                        variant="h6"
                        gutterBottom
                        className={classes.title}
                    >
                        Address List
                    </Typography>
                    {employee.address.map(address => {
                        return (
                            <div style={styles.address} key={address.id}>
                                <p style={styles.addressLine}>
                                    {address.line1} {address.line2}
                                </p>
                                <p style={styles.addressLine}>
                                    {address.city}, {address.state}{' '}
                                    {address.zipcode}
                                </p>
                            </div>
                        );
                    })}

                    <Typography
                        variant="h6"
                        gutterBottom
                        className={classes.title}
                    >
                        Skills List
                    </Typography>

                    <EmployeeSkills
                        skills={employee.skills}
                        onClickedDelete={deleteSkill}
                    />
                </div>
            )}
        </React.Fragment>
    );
}
