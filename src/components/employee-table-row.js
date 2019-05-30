import React, { useEffect, useState } from 'react';
import { TableCell, TableRow, IconButton, Chip } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const skills = [
    {
        ID: 1,
        name: 'react'
    },
    {
        ID: 2,
        name: 'html'
    },
    {
        ID: 3,
        name: 'css'
    }
];

export default function EmployeeTableRow({ employee }) {
    return (
        <TableRow>
            <TableCell>{employee.firstname}</TableCell>
            <TableCell>{employee.lastname}</TableCell>
            <TableCell>
                <a href="">
                    {employee.address ? employee.address : 'add address'}
                </a>
            </TableCell>
            <TableCell>
                {skills.map(skill => {
                    return (
                        <Chip
                            key={skill.ID}
                            label={skill.name}
                            onDelete={() => {
                                console.log('todo: delete skill');
                            }}
                        />
                    );
                })}
            </TableCell>
            <TableCell>
                <IconButton aria-label="Delete">
                    <DeleteIcon />
                </IconButton>
                <IconButton aria-label="Edit">
                    <EditIcon />
                </IconButton>
            </TableCell>
        </TableRow>
    );
}
