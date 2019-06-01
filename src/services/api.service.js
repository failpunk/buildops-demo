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
import { listEmployees } from '../graphql/queries';

export default {
    unwrap(result, key) {
        return result.data[key].items;
    },

    onCreateEmployee(fn) {
        return this.subscribe(onCreateEmployee, fn);
    },

    onUpdateEmployee(fn) {
        return this.subscribe(onUpdateEmployee, fn);
    },

    onDeleteEmployee(fn) {
        return this.subscribe(onDeleteEmployee, fn);
    },

    subscribe(subscription, fn) {
        return API.graphql(graphqlOperation(subscription)).subscribe({
            next: fn
        });
    },

    async getAllEmployees() {
        const result = await API.graphql(graphqlOperation(listEmployees));
        return this.unwrap(result, 'listEmployees');
    },

    async createEmployee(values) {
        const result = await API.graphql(
            graphqlOperation(createEmployee, { input: values })
        );
        return this.unwrap(result, 'createEmployee');
    },

    updateEmployee(values) {
        return API.graphql(graphqlOperation(updateEmployee, { input: values }));
    },

    deleteEmployee(id) {
        return API.graphql(graphqlOperation(deleteEmployee, { input: { id } }));
    }
};
