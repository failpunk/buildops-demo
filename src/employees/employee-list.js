import React, { useEffect, useState } from 'react';
import {
    Fab,
    makeStyles,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import Api from '../services/api.service';
import EmployeeListRow from './employee-list-item';
import AddEmployeeModal from './add-employee-modal';

const useStyles = makeStyles(theme => ({
    fab: {
        margin: theme.spacing(1),
        position: 'absolute',
        right: '10px'
    },

    extendedIcon: {
        marginRight: theme.spacing(1)
    }
}));

export default function EmployeeList({ onViewEmployee }) {
    const classes = useStyles();

    const [employeeList, setEmployeeList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [modalIsOpen, setModalIsOpen] = useState(true);

    // Load existing employees.
    useEffect(() => {
        fetchEmployees();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    async function fetchEmployees() {
        const employees = await Api.getAllEmployees();
        setEmployeeList(employees);
        setIsLoading(false);
        onViewEmployee(employees[0]);
    }

    function handleOpen() {
        setModalIsOpen(true);
    }

    function handleClose() {
        setModalIsOpen(false);
        fetchEmployees();
    }

    async function deleteEmployee(employee) {
        console.log('TODO: delete employee', employee);
        const deleted = await Api.deleteEmployee(employee.id);
        console.log('deleteEmployee', deleted);
    }

    return (
        <React.Fragment>
            <Typography variant="h5" className="margin-bottom-2">
                Employees
            </Typography>

            <Fab
                color="primary"
                aria-label="Add"
                className={classes.fab}
                onClick={handleOpen}
            >
                <AddIcon />
            </Fab>

            <AddEmployeeModal isOpen={modalIsOpen} handleClose={handleClose} />

            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>First</TableCell>
                        <TableCell>Last</TableCell>
                        <TableCell />
                    </TableRow>
                </TableHead>

                <TableBody>
                    {!isLoading &&
                        employeeList.map(employee => {
                            return (
                                <EmployeeListRow
                                    key={employee.id}
                                    employee={employee}
                                    onDeleteEmployee={deleteEmployee}
                                    onViewEmployee={onViewEmployee}
                                />
                            );
                        })}
                </TableBody>
            </Table>
        </React.Fragment>
    );
}
