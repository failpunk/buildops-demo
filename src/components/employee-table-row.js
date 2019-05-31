import React from 'react';
import { TableCell, TableRow, IconButton, Chip } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Api from '../services/api.service';

export default function EmployeeTableRow({ employee }) {
    async function deleteEmployee() {
        try {
            await Api.deleteEmployee(employee.id);
        } catch (err) {
            console.log('ERROR DELETING EMPLOYEE', err.errors);
        }
    }

    return (
        <TableRow>
            <TableCell>{employee.firstname}</TableCell>
            <TableCell>{employee.lastname}</TableCell>
            <TableCell>
                <a href="/">add address</a>
            </TableCell>
            <TableCell>
                {employee.skills.map((skill, i) => {
                    return (
                        <Chip
                            key={i}
                            label={skill.name}
                            onDelete={() => {
                                console.log('todo: delete skill');
                            }}
                        />
                    );
                })}
            </TableCell>
            <TableCell>
                <IconButton aria-label="Delete" onClick={deleteEmployee}>
                    <DeleteIcon />
                </IconButton>
                <IconButton aria-label="Edit">
                    <EditIcon />
                </IconButton>
            </TableCell>
        </TableRow>
    );
}
