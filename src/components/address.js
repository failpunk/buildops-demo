import React from 'react';
import AddressList from './address-list';
import AddressForm from './address-form';

function Address() {
    return (
        <div>
            <h2>Address</h2>
            <AddressForm />
            <AddressList />
        </div>
    );
}

export default Address;
