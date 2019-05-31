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
                            <TableCell>Apt 312</TableCell>
                            <TableCell>Sherman Oaks</TableCell>
                            <TableCell>CA</TableCell>
                            <TableCell>91403</TableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    );
}
