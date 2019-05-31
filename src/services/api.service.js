import { API, graphqlOperation } from 'aws-amplify';
import { onCreateEmployee, onDeleteEmployee } from '../graphql/subscriptions';
import { createEmployee, deleteEmployee } from '../graphql/mutations';
import { listEmployees } from '../graphql/queries';

export default {
    unwrap(result, key) {
        return result.data[key].items;
    },

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
        return this.unwrap(result, 'listEmployees');
    },

    async createEmployee(values) {
        const result = await API.graphql(
            graphqlOperation(createEmployee, { input: values })
        );
        return this.unwrap(result, 'createEmployee');
    },

    deleteEmployee(id) {
        return API.graphql(graphqlOperation(deleteEmployee, { input: { id } }));
    }
};
