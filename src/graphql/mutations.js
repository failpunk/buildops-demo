// eslint-disable
// this is an auto generated file. This will be overwritten

export const createEmployee = `mutation CreateEmployee($input: CreateEmployeeInput!) {
  createEmployee(input: $input) {
    id
    firstname
    lastname
    address {
      line1
      line2
      city
      state
      zipcode
    }
    skills {
      name
    }
  }
}
`;
export const updateEmployee = `mutation UpdateEmployee($input: UpdateEmployeeInput!) {
  updateEmployee(input: $input) {
    id
    firstname
    lastname
    address {
      line1
      line2
      city
      state
      zipcode
    }
    skills {
      name
    }
  }
}
`;
export const deleteEmployee = `mutation DeleteEmployee($input: DeleteEmployeeInput!) {
  deleteEmployee(input: $input) {
    id
    firstname
    lastname
    address {
      line1
      line2
      city
      state
      zipcode
    }
    skills {
      name
    }
  }
}
`;
