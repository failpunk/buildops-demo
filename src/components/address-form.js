import React from 'react';
import { useFormState } from 'react-use-form-state';
import { API, graphqlOperation } from 'aws-amplify';
import { createAddress } from '../graphql/mutations';

function AddressForm() {
    const [formState, { text }] = useFormState();

    return (
        <div>
            <h2>Address Form</h2>

            <form className="pure-form pure-form-stacked" onSubmit={submitForm}>
                <fieldset>
                    <legend>Add a new address</legend>

                    <label htmlFor="line1">Address Line 1</label>
                    <input {...text('line1')} required />

                    <label htmlFor="line2">Address Line 1</label>
                    <input {...text('line2')} />

                    <label htmlFor="city">City</label>
                    <input {...text('city')} required />

                    <label htmlFor="state">State</label>
                    <input {...text('state')} required />

                    <label htmlFor="zipcode">Zip Code</label>
                    <input {...text('zipcode')} required />

                    <button
                        type="submit"
                        className="pure-button pure-button-primary"
                    >
                        Submit
                    </button>
                </fieldset>
            </form>
        </div>
    );

    function submitForm(event) {
        event.preventDefault();

        const { values, validity } = formState;

        console.log('....', values, validity, formState);

        createNewAddress(values);
    }

    async function createNewAddress(formValues) {
        console.log('createNewAddress', formValues);

        try {
            const postData = await API.graphql(
                graphqlOperation(createAddress, { input: formValues })
            );
        } catch (err) {
            console.log('ERROR CREATING ADDRESS', err);
        }
    }
}

export default AddressForm;
