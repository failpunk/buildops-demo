import React, { useEffect, useState } from 'react';
import {
    Fab,
    makeStyles,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import Api from '../services/api.service';
import EmployeeListRow from './employee-list-item';

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

    // Load existing employees.
    useEffect(() => {
        async function fetchEmployees() {
            const employees = await Api.getAllEmployees();
            setEmployeeList(employees);
            setIsLoading(false);
            onViewEmployee(employees[0]);
        }

        fetchEmployees();
    }, []);

    function deleteEmployee(employee) {
        console.log('TODO: delete employee', employee);
    }

    return (
        <React.Fragment>
            <h2>Employees</h2>

            <Fab color="primary" aria-label="Add" className={classes.fab}>
                <AddIcon />
            </Fab>

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
