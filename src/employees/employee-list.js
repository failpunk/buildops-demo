import React, { useEffect, useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography
} from '@material-ui/core';

import Api from '../services/api.service';
import EmployeeListRow from './employee-list-item';
import AddEmployeeButton from './add-employee-button';

export default function EmployeeList({ onViewEmployee }) {
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
            <Typography variant="h5" className="margin-bottom-2">Employees</Typography>

            <AddEmployeeButton />

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
