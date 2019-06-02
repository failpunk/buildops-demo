import React from 'react';
import {
    Table,
    TableBody,
    TableHead,
    TableRow,
    TableCell
} from '@material-ui/core';

export default function AddressTable({ addresses }) {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Address 1</TableCell>
                    <TableCell>Address 2</TableCell>
                    <TableCell>City</TableCell>
                    <TableCell>State</TableCell>
                    <TableCell>Zip Code</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {addresses.map((address, i) => {
                    return (
                        <TableRow key={i}>
                            <TableCell>{address.line1}</TableCell>
                            <TableCell>{address.line2}</TableCell>
                            <TableCell>{address.city}</TableCell>
                            <TableCell>{address.state}</TableCell>
                            <TableCell>{address.zipcode}</TableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    );
}
