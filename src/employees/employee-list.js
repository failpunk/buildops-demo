/* eslint-disable no-script-url */

import React, { useEffect, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Api from '../services/api.service';

export default function Orders() {
    const [employeeList, setEmployeeList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
            <h2>Employees</h2>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>First</TableCell>
                        <TableCell>Last</TableCell>
                        <TableCell>Joined On</TableCell>
                        <TableCell />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {!isLoading &&
                        employeeList.map(employee => {
                            return (
                                <TableRow key={employee.id}>
                                    <TableCell>{employee.firstname}</TableCell>
                                    <TableCell>{employee.lastname}</TableCell>
                                    <TableCell />
                                    <TableCell />
                                </TableRow>
                            );
                        })}
                </TableBody>
            </Table>
        </React.Fragment>
    );
}
