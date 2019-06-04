import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container, makeStyles, Grid, Paper, Toolbar } from '@material-ui/core';
import clsx from 'clsx';

import EmployeeList from './employees/employee-list';

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
    }
}));

export default function App() {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <React.Fragment>
            <CssBaseline />

            <AppBar position="relative">
                <Toolbar>
                    <img src="fast-banana-logo.png" alt="" />
                </Toolbar>
            </AppBar>

            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        {/* Chart */}
                        <Grid item xs={12} md={8} lg={5}>
                            <Paper className={fixedHeightPaper}>
                                <EmployeeList />
                            </Paper>
                        </Grid>
                        {/* Recent Deposits */}
                        <Grid item xs={12} md={4} lg={7}>
                            <Paper className={fixedHeightPaper}>Details</Paper>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    );
}
