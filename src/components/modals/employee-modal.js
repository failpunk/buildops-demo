import React from 'react';
import { Dialog, DialogContent } from '@material-ui/core';
import AllDetailsForm from '../forms/full-employee-form';

export default function AddEmployeeModal({
    employee = {},
    isOpen,
    onCloseModal: closeModal,
    persistData
}) {
    async function formSubmitted(formData) {
        try {
            await persistData(formData);
            closeModal(true);
        } catch (err) {
            console.log('ERROR CREATING NEW EMPOYEE', err);
            closeModal();
        }
    }

    return (
        <Dialog
            open={isOpen}
            onClose={closeModal}
            aria-labelledby="form-dialog-title"
        >
            <DialogContent className="padding-2">
                <AllDetailsForm
                    employee={employee}
                    onFormSubmit={formSubmitted}
                    onCancel={closeModal}
                />
            </DialogContent>
        </Dialog>
    );
}
