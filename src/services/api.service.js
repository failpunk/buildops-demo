import { API, graphqlOperation } from 'aws-amplify';
import { onCreateEmployee, onDeleteEmployee } from '../graphql/subscriptions';
import { createEmployee, deleteEmployee } from '../graphql/mutations';
import { listEmployees } from '../graphql/queries';

export default {
    // Subscribe to employee changes.
    onCreateEmployee(fn) {
        return this.subscribe(onCreateEmployee, fn);
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
        return result.data.listEmployees.items;
    },

    createEmployee(values) {
        return API.graphql(graphqlOperation(createEmployee, { input: values }));
    },

    deleteEmployee(id) {
        return API.graphql(graphqlOperation(deleteEmployee, { input: { id } }));
    }
};
