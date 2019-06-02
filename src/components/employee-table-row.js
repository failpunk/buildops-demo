import React, { useState } from 'react';
import { TableCell, TableRow, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Api from '../services/api.service';
import AddressTable from './address-table';
import EmployeeSkills from './employee-skills';

export default function EmployeeTableRow({ employee }) {
    const [showAddressRow, setShowAddressRow] = useState(false);

    async function deleteEmployee() {
        try {
            await Api.deleteEmployee(employee.id);
        } catch (err) {
            console.log('ERROR DELETING EMPLOYEE', err.errors);
        }
    }

    async function editEmployee() {
        console.log('TODO: implement edit functionality');
    }

    async function deleteSkill(name) {
        employee.skills = employee.skills.filter(skill => skill.name !== name);

        console.log('employee', employee);

        try {
            await Api.updateEmployee(employee);
        } catch (err) {
            console.log('ERROR DELETING SKILL', err.errors);
        }
    }

    function toggleAddressRows() {
        setShowAddressRow(!showAddressRow);
    }

    return (
        <React.Fragment>
            <TableRow>
                <TableCell>{employee.firstname}</TableCell>
                <TableCell>{employee.lastname}</TableCell>
                <TableCell>
                    {employee.address.length && (
                        <button onClick={toggleAddressRows}>
                            {showAddressRow ? 'hide' : 'show'}{' '}
                            {employee.address.length} address
                        </button>
                    )}
                </TableCell>
                <TableCell>
                    <EmployeeSkills
                        skills={employee.skills}
                        onClickedDelete={deleteSkill}
                    />
                </TableCell>
                <TableCell>
                    <IconButton aria-label="Delete" onClick={deleteEmployee}>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton aria-label="Edit" onClick={editEmployee}>
                        <EditIcon />
                    </IconButton>
                </TableCell>
            </TableRow>

            {showAddressRow && (
                <TableRow>
                    <TableCell
                        colSpan={5}
                        children={<AddressTable addresses={employee.address} />}
                    />
                </TableRow>
            )}
        </React.Fragment>
    );
}
