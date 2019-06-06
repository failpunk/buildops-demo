import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container, makeStyles, Grid, Paper, Toolbar } from '@material-ui/core';
import clsx from 'clsx';

import EmployeeList from './employees/employee-list';
import EmployeeDetail from './employees/employee-detail';

const useStyles = makeStyles(theme => ({
    appBarSpacer: theme.mixins.toolbar,

    content: {
        flexGrow: 1
    },

    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4)
    },

    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column'
    },

    relative: {
        position: 'relative'
    }
}));

export default function App() {
    const classes = useStyles();
    const fixedHeightPaper = clsx(
        classes.paper,
        classes.fixedHeight,
        classes.relative
    );

    const [employee, setEmployee] = useState({});

    function viewEmployee(selectedEmployee) {
        setEmployee(selectedEmployee);
    }

    return (
        <React.Fragment>
            <CssBaseline />

            <AppBar position="relative">
                <Toolbar>
                    <img src="fast-banana-logo.png" alt="" />
                </Toolbar>
            </AppBar>

            <main className={classes.content}>
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={8} lg={5}>
                            <Paper className={fixedHeightPaper}>
                                <EmployeeList onViewEmployee={viewEmployee} />
                            </Paper>
                        </Grid>

                        <Grid item xs={12} md={4} lg={7}>
                            <Paper className={fixedHeightPaper}>
                                {employee.id && (
                                    <EmployeeDetail employeeId={employee.id} />
                                )}
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    );
}
