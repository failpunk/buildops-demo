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
      id
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
      id
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
      id
      name
    }
  }
}
`;
export const createAddress = `mutation CreateAddress($input: CreateAddressInput!) {
  createAddress(input: $input) {
    line1
    line2
    city
    state
    zipcode
  }
}
`;
export const updateAddress = `mutation UpdateAddress($input: UpdateAddressInput!) {
  updateAddress(input: $input) {
    line1
    line2
    city
    state
    zipcode
  }
}
`;
export const deleteAddress = `mutation DeleteAddress($input: DeleteAddressInput!) {
  deleteAddress(input: $input) {
    line1
    line2
    city
    state
    zipcode
  }
}
`;
export const createSkill = `mutation CreateSkill($input: CreateSkillInput!) {
  createSkill(input: $input) {
    id
    name
  }
}
`;
export const updateSkill = `mutation UpdateSkill($input: UpdateSkillInput!) {
  updateSkill(input: $input) {
    id
    name
  }
}
`;
export const deleteSkill = `mutation DeleteSkill($input: DeleteSkillInput!) {
  deleteSkill(input: $input) {
    id
    name
  }
}
`;
