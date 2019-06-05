import React from 'react';
import { Dialog, DialogContent } from '@material-ui/core';
import AllDetailsForm from '../components/forms/all-details-form';
import Api from '../services/api.service';

export default function AddEmployeeModal({ isOpen, handleClose: closeModal }) {
    async function formSubmitted(formData) {
        console.log('formSubmitted', formData);

        try {
            // TODO: Create employee then attach to address and skills?
            // const { firstname, lastname, address, skills } = formData;

            const employee = await Api.createEmployee(formData);
            console.log('employee', employee);

            // const addresses = await Api.createAddress(address, employee.id);

            // const newSkills = await Api.createSkills(skills, employee.id);

            closeModal();
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
