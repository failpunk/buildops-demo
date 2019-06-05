import React from 'react';

export default function EmployeeDetail({ employee }) {
    return (
        <React.Fragment>
            <h2>
                {employee.firstname} {employee.lastname}
            </h2>
        </React.Fragment>
    );
}
