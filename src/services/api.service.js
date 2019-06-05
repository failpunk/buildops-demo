import { API, graphqlOperation } from 'aws-amplify';
import {
    onCreateEmployee,
    onDeleteEmployee,
    onUpdateEmployee
} from '../graphql/subscriptions';
import {
    createEmployee,
    deleteEmployee,
    updateEmployee
} from '../graphql/mutations';
import { getEmployee, listEmployees } from '../graphql/queries';

export default {
    _unwrap(result, key) {
        const data = result.data[key];

        return data.items ? data.items : data; // handle arrays and objects
    },

    _subscribe(subscription, fn) {
        return API.graphql(graphqlOperation(subscription)).subscribe({
            next: fn
        });
    },

    onCreateEmployee(fn) {
        return this._subscribe(onCreateEmployee, fn);
    },

    onUpdateEmployee(fn) {
        return this._subscribe(onUpdateEmployee, fn);
    },

    onDeleteEmployee(fn) {
        return this._subscribe(onDeleteEmployee, fn);
    },

    async getOneEmployee(id) {
        const result = await API.graphql(graphqlOperation(getEmployee, { id }));
        return this._unwrap(result, 'getEmployee');
    },

    async getAllEmployees() {
        const result = await API.graphql(graphqlOperation(listEmployees));
        return this._unwrap(result, 'listEmployees');
    },

    async createEmployee({ firstname, lastname, address = [], skills = [] }) {
        console.log(
            'createEmployee input',
            firstname,
            lastname,
            address,
            skills
        );

        const result = await API.graphql(
            graphqlOperation(createEmployee, {
                input: { firstname, lastname, address, skills }
            })
        );
        return this._unwrap(result, 'createEmployee');
    },

    // async createAddress(addressArr, employeeId) {s
    //     console.log('createAddress input', addressArr);

    //     const results = await Promise.all(
    //         addressArr.map(address => {
    //             return API.graphql(
    //                 graphqlOperation(createAddress, {
    //                     input: { ...address, employeeId }
    //                 })
    //             );
    //         })
    //     );

    //     console.log('createAddress result', results);

    //     return results.map(result => this._unwrap(result, 'createAddress'));
    // },

    // async createSkills(skillsArr, employeeId) {
    //     console.log('createSkills input', skillsArr);

    //     const results = await Promise.all(
    //         skillsArr.map(skill => {
    //             return API.graphql(
    //                 graphqlOperation(createSkill, {
    //                     input: { ...skill, employeeId }
    //                 })
    //             );
    //         })
    //     );

    //     console.log('createSkill result', results);

    //     return results.map(result => this._unwrap(result, 'createSkill'));
    // },

    updateEmployee(values) {
        return API.graphql(graphqlOperation(updateEmployee, { input: values }));
    },

    deleteEmployee(id) {
        API.graphql(graphqlOperation(deleteEmployee, { input: { id } }));
    }
};
