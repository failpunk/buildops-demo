import React, { useState } from 'react';
import { Button, Container, Grid } from '@material-ui/core';

import EmployeeForm from './employee-form';

export default function AddEmployee() {
    const [isAddingEmployee, setIsAddingEmployee] = useState(false);

    return (
        <div>
            <Container maxWidth="sm">
                <div>
                    <Grid container spacing={2} justify="center">
                        <Grid item>
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
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    );
}
