import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listAddresss } from '../graphql/queries';

function AddressList() {
    const [addressList, setAddressList] = useState([]);

    useEffect(() => {
        async function fetchAddresses() {
            const result = await API.graphql(graphqlOperation(listAddresss));

            setAddressList(result.data.listAddresss.items);
        }

        fetchAddresses();
    }, []);

    return (
        <div>
            <h2>Address List</h2>

            <table className="pure-table">
                <thead>
                    <tr>
                        <th>Line 1</th>
                        <th>Line 2</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip Code</th>
                    </tr>
                </thead>

                <tbody>
                    {addressList.map(address => {
                        return (
                            <tr key={address.line1}>
                                <td>{address.line1}</td>
                                <td>{address.line2}</td>
                                <td>{address.city}</td>
                                <td>{address.state}</td>
                                <td>{address.zipcode}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default AddressList;
