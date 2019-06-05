import React from 'react';
import { Chip, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    chip: {
        margin: theme.spacing(0.5)
    }
}));

export default function EmployeeSkills({ skills, onClickedDelete }) {
    const classes = useStyles();

    return skills.map(skill => {
        return (
            <Chip
                key={skill.id}
                label={skill.name}
                className={classes.chip}
                onDelete={() => {
                    onClickedDelete(skill.name);
                }}
            />
        );
    });
}
