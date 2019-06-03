import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';

import AddEmployee from './components/employee-add';
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
                <Container maxWidth="lg">
                    <AddEmployee />
                    <EmployeeTable />
                </Container>
            </main>
        </React.Fragment>
    );
}
