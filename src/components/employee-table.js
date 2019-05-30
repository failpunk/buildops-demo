import React, { useEffect, useState } from 'react';
import {
    Table,
    TableBody,
    TableHead,
    TableCell,
    TableRow
} from '@material-ui/core';
import { API, graphqlOperation } from 'aws-amplify';
import { listEmployees } from '../graphql/queries';
import { onCreateEmployee } from '../graphql/subscriptions';

import EmployeeTableRow from './employee-table-row';

export default function EmployeeTable() {
    const [employeeList, setEmployeeList] = useState([]);

    // Subscribe to employee changes.
    const subscription = API.graphql(
        graphqlOperation(onCreateEmployee)
    ).subscribe({
        next: employeeData => {
            let newEmployee = employeeData.value.data.onCreateEmployee;
            setEmployeeList([...employeeList, newEmployee]);
        }
    });

    useEffect(() => {
        async function fetchEmployees() {
            const result = await API.graphql(graphqlOperation(listEmployees));
            setEmployeeList(result.data.listEmployees.items);
        }

        fetchEmployees();

        // Unsubscribe from employee updates.
        return () => {
            subscription.unsubscribe();
        };
    }, []);

    return (
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
                {employeeList.map(employee => {
                    return (
                        <EmployeeTableRow
                            key={employee.id}
                            employee={employee}
                        />
                    );
                })}
            </TableBody>
        </Table>
    );
}
