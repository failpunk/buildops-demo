import React from 'react';
import { Dialog, DialogContent } from '@material-ui/core';
import AllDetailsForm from '../components/forms/all-details-form';
import Api from '../services/api.service';

export default function AddEmployeeModal({ isOpen, handleClose: closeModal }) {
    async function formSubmitted(formData) {
        try {
            await Api.createEmployee(formData);
            closeModal(true);
        } catch (err) {
            console.log('ERROR CREATING NEW EMPOYEE', err);
            closeModal();
        }
    }

    return (
        <React.Fragment>
            <Dialog
                open={isOpen}
                onClose={closeModal}
                aria-labelledby="form-dialog-title"
            >
                <DialogContent className="padding-2">
                    <AllDetailsForm
                        onFormSubmit={formSubmitted}
                        onCancel={closeModal}
                    />
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
}
