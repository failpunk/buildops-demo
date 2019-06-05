import React, { useState } from 'react';
import {
    Fab,
    makeStyles,
    Dialog,
    DialogTitle,
    DialogContent
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
    fab: {
        margin: theme.spacing(1),
        position: 'absolute',
        right: '10px'
    },

    extendedIcon: {
        marginRight: theme.spacing(1)
    }
}));

export default function AddEmployeeButton() {
    const classes = useStyles();

    const [open, setOpen] = useState(false);

    function handleOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    return (
        <React.Fragment>
            <Fab
                color="primary"
                aria-label="Add"
                className={classes.fab}
                onClick={handleOpen}
            >
                <AddIcon />
            </Fab>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">
                    Add New Employee
                </DialogTitle>
                <DialogContent>asdlfkhjasdkfhs</DialogContent>
            </Dialog>
        </React.Fragment>
    );
}
