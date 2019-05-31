import React, { useEffect, useState } from 'react';
import {
    Box,
    CircularProgress,
    Table,
    TableBody,
    TableHead,
    TableCell,
    TableRow
} from '@material-ui/core';

import Api from '../services/api.service';
import EmployeeTableRow from './employee-table-row';

export default function EmployeeTable() {
    const [employeeList, setEmployeeList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Subscribe to employee changes.
    useEffect(() => {
        const onCreated = Api.onCreateEmployee(data => {
            let newEmployee = data.value.data.onCreateEmployee;
            setEmployeeList([newEmployee, ...employeeList]);
        });

        return () => onCreated.unsubscribe();
    });

    // Subscribe to employee deletions.
    useEffect(() => {
        const onDeleted = Api.onDeleteEmployee(data => {
            let deletedEmployee = data.value.data.onDeleteEmployee;

            let filteredEmployees = employeeList.filter(
                employee => employee.id !== deletedEmployee.id
            );

            setEmployeeList([...filteredEmployees]);
        });

        return () => onDeleted.unsubscribe();
    });

    // Load existing employees.
    useEffect(() => {
        async function fetchEmployees() {
            const employees = await Api.getAllEmployees();
            console.log('employees', employees);
            setEmployeeList(employees);
            setIsLoading(false);
        }

        fetchEmployees();
    }, []);

    return (
        <React.Fragment>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Skills</TableCell>
                        <TableCell />
                    </TableRow>
                </TableHead>

                <TableBody>
                    {!isLoading &&
                        employeeList.map(employee => {
                            return (
                                <EmployeeTableRow
                                    key={employee.id}
                                    employee={employee}
                                />
                            );
                        })}
                </TableBody>
            </Table>

            <Box m={2} style={{ textAlign: 'center' }}>
                {isLoading && <CircularProgress color="secondary" />}
            </Box>
        </React.Fragment>
    );
}
