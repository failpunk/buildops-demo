import React, { useState } from 'react';
import { Button, Container, Grid, Box } from '@material-ui/core';

import EmployeeForm from './forms/employee-form';

export default function AddEmployee() {
    const [isAddingEmployee, setIsAddingEmployee] = useState(false);

    return (
        <Container maxWidth="sm">
            <Grid container spacing={2} justify="center">
                <Grid item>
                    <Box p={4}>
                        {!isAddingEmployee && (
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => setIsAddingEmployee(true)}
                            >
                                Add New Employee
                            </Button>
                        )}

                        {isAddingEmployee && <EmployeeForm />}
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}
