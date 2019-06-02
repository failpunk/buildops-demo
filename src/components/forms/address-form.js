import React from 'react';
import { useFormState } from 'react-use-form-state';
import { Grid, IconButton, TextField, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

export default function AddressForm({ name, onChange, onRemoveAddress }) {
    const [formState, { text }] = useFormState(null, {
        onChange: (e, stateValues, nextStateValues) => {
            onChange({ name, values: nextStateValues });
        }
    });

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom className="margin-2">
                Employee Address
                <IconButton
                    aria-label="Delete"
                    color="primary"
                    onClick={() => onRemoveAddress(name)}
                >
                    <DeleteIcon />
                </IconButton>
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        required
                        {...text('line1')}
                        label="Address line 1"
                        fullWidth
                        autoComplete="billing address-line1"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        {...text('line2')}
                        label="Address line 2"
                        fullWidth
                        autoComplete="billing address-line2"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        {...text('city')}
                        label="City"
                        fullWidth
                        autoComplete="billing address-level2"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        {...text('state')}
                        label="State/Province/Region"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        {...text('zipcode')}
                        label="Zip / Postal code"
                        fullWidth
                        autoComplete="billing postal-code"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
