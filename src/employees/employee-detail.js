import React, { useEffect, useState } from 'react';
import { Fab, makeStyles, Typography } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

import EditEmployeeModal from '../components/modals/edit-employee-modal';
import LoadingIndicator from '../components/loading-indicator';
import EmployeeSkills from '../components/employee-skills';
import EmployeeAddresses from '../components/employee-addresses';
import Api from '../services/api.service';

const useStyles = makeStyles(theme => ({
    listItem: {
        padding: theme.spacing(1, 0)
    },
    total: {
        fontWeight: '700'
    },
    title: {
        marginTop: theme.spacing(2),
        marginBottom: '1rem'
    },
    fab: {
        position: 'absolute',
        right: '10px'
    }
}));

export default function EmployeeDetail({ employeeId }) {
    const classes = useStyles();

    const [employee, setEmployee] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    // Load existing employees.
    useEffect(() => {
        try {
            setIsLoading(true);
            fetchEmployee();
        } catch (error) {
            console.log('error fetching one employee', employeeId, error);
        }
    }, [employeeId]); // eslint-disable-line react-hooks/exhaustive-deps

    async function fetchEmployee() {
        const employee = await Api.getOneEmployee(employeeId);
        setEmployee(employee);
        setIsLoading(false);
    }

    async function deleteSkill(name) {
        const updatedEmployee = await Api.deleteSkill(employee, name);
        setEmployee(updatedEmployee);
    }

    async function deleteAddress(address) {
        const updatedEmployee = await Api.deleteAddress(employee, address);
        setEmployee(updatedEmployee);
    }

    function handleOpen() {
        setModalIsOpen(true);
    }

    function handleClose(reloadList = false) {
        setModalIsOpen(false);

        if (reloadList === true) {
            fetchEmployee();
        }
    }

    return (
        <React.Fragment>
            {/* LOADING INDICATOR */}
            {isLoading && <LoadingIndicator />}

            {/* USER DATA */}
            {!isLoading && (
                <div>
                    <Fab
                        color="secondary"
                        aria-label="Edit"
                        className={classes.fab}
                        onClick={handleOpen}
                    >
                        <EditIcon />
                    </Fab>

                    <EditEmployeeModal
                        employee={employee}
                        isOpen={modalIsOpen}
                        handleClose={handleClose}
                    />

                    <Typography variant="h4" className="margin-bottom-2">
                        {employee.firstname} {employee.lastname}
                    </Typography>

                    <Typography
                        variant="h6"
                        gutterBottom
                        className={classes.title}
                    >
                        Address List
                    </Typography>

                    {employee.address.map((address, i) => {
                        return (
                            <EmployeeAddresses
                                key={i}
                                address={address}
                                className="margin-bottom-2"
                                onDelete={deleteAddress}
                            />
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
                        className="margin-bottom-2"
                    />
                </div>
            )}
        </React.Fragment>
    );
}
