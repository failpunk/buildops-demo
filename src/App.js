import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import AddEmployee from './components/add-employee';
import EmployeeTable from './components/employee-table';

export default function Album() {
    return (
        <React.Fragment>
            <CssBaseline />

            <AppBar position="relative">
                <Toolbar>
                    <img src="fast-banana-logo.png" alt="" />
                </Toolbar>
            </AppBar>

            <main>
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="textPrimary"
                    gutterBottom
                >
                    Employee Directory
                </Typography>
                <AddEmployee />

                <Container maxWidth="lg">
                    <EmployeeTable />
                </Container>
            </main>
        </React.Fragment>
    );
}
