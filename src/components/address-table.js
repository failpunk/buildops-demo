import React from 'react';
import {
    Table,
    TableBody,
    TableHead,
    TableRow,
    TableCell
} from '@material-ui/core';

const AddressTable = () => (
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
            <TableRow>
                <TableCell>15301 Valley Vista Blvd</TableCell>
                <TableCell>Apt 312</TableCell>
                <TableCell>Sherman Oaks</TableCell>
                <TableCell>CA</TableCell>
                <TableCell>91403</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>727 Wilcox Ave #201</TableCell>
                <TableCell />
                <TableCell>Los Angeles</TableCell>
                <TableCell>CA</TableCell>
                <TableCell>90038</TableCell>
            </TableRow>
        </TableBody>
    </Table>
);

export default AddressTable;
