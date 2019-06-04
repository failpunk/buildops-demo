import React, { useEffect, useState } from 'react';
import {
    Box,
    CircularProgress,
    Table,
    TableBody,
    TableHead,
    TableCell,
    TableRow,
} from '@material-ui/core';

import Api from '../services/api.service';
import EmployeeTableRow from './employee-table-row';

export default function EmployeeTable() {
    const [employeeList, setEmployeeList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    function cleanEmployeeObj(employee) {
        delete employee.__typename;
        return employee;
    }

    // Subscribe to employee changes.
    useEffect(() => {
        const onCreated = Api.onCreateEmployee(data => {
            let newEmployee = cleanEmployeeObj(
                data.value.data.onCreateEmployee
            );
            setEmployeeList([newEmployee, ...employeeList]);
        });

        return () => onCreated.unsubscribe();
    });

    // Subscribe to employee updates.
    useEffect(() => {
        const onUpdate = Api.onUpdateEmployee(data => {
            let updatedEmployee = cleanEmployeeObj(
                data.value.data.onUpdateEmployee
            );

            const updatedList = employeeList.map(employee => {
                if (employee.id === updatedEmployee.id) {
                    return updatedEmployee;
                }

                return employee;
            });

            setEmployeeList(updatedList);
        });

        return () => onUpdate.unsubscribe();
    });

    // Subscribe to employee deletions.
    useEffect(() => {
        const onDeleted = Api.onDeleteEmployee(data => {
            let deletedEmployee = cleanEmployeeObj(
                data.value.data.onDeleteEmployee
            );

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

                {!isLoading && !employeeList.length && (
                    <TableBody>
                        <TableRow>
                            <TableCell
                                style={{ textAlign: 'center' }}
                                colSpan={5}
                            >
                                You have not yet added any employees
                            </TableCell>
                        </TableRow>
                    </TableBody>
                )}
            </Table>

            <Box m={2} style={{ textAlign: 'center' }}>
                {isLoading && <CircularProgress color="secondary" />}
            </Box>
        </React.Fragment>
    );
}
