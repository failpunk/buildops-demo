import React from 'react';
import { Chip } from '@material-ui/core';

export default function EmployeeSkills({ skills, onClickedDelete }) {
    return skills.map((skill, i) => {
        return (
            <Chip
                key={i}
                label={skill.name}
                onDelete={() => {
                    onClickedDelete(skill.name);
                }}
            />
        );
    });
}
