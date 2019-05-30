import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

export default function AddEmployee() {
    return (
        <div>
            <Container maxWidth="sm">
                <div>
                    <Grid container spacing={2} justify="center">
                        <Grid item>
                            <Button variant="contained" color="primary">
                                Add New Employee
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    );
}
