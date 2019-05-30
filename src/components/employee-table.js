import React from 'react';
import {
    Table,
    TableBody,
    TableHead,
    TableCell,
    TableRow
} from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import AddressTable from './address-table';

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

const EmployeeTable = () => (
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
            <TableRow>
                <TableCell>John</TableCell>
                <TableCell>Smith</TableCell>
                <TableCell>
                    <a href="">2 addresses</a>
                </TableCell>
                <TableCell>
                    {skills.map(skill => {
                        return (
                            <Chip
                                key={skill.ID}
                                label={skill.name}
                                onDelete={() => {
                                    console.log('DELETE CHIP');
                                }}
                            />
                        );
                    })}
                </TableCell>
                <TableCell>
                    <DeleteIcon />
                    <EditIcon />
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell colSpan={5} children={<AddressTable />} />
            </TableRow>
            <TableRow>
                <TableCell>Egor</TableCell>
                <TableCell>Whatevs</TableCell>
                <TableCell>
                    <a href="">add address</a>
                </TableCell>
                <TableCell>
                    <a href="">add a skill</a>
                </TableCell>
                <TableCell>
                    <DeleteIcon />
                    <EditIcon />
                </TableCell>
            </TableRow>
        </TableBody>
    </Table>
);

export default EmployeeTable;
