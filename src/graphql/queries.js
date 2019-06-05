// eslint-disable
// this is an auto generated file. This will be overwritten

export const getEmployee = `query GetEmployee($id: ID!) {
  getEmployee(id: $id) {
    id
    firstname
    lastname
    address {
      id
      line1
      line2
      city
      state
      zipcode
      employeeId
    }
    skills {
      id
      name
      employeeId
    }
  }
}
`;
export const listEmployees = `query ListEmployees(
  $filter: TableEmployeeFilterInput
  $limit: Int
  $nextToken: String
) {
  listEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      firstname
      lastname
    }
    nextToken
  }
}
`;
export const getAddress = `query GetAddress($id: ID!) {
  getAddress(id: $id) {
    id
    line1
    line2
    city
    state
    zipcode
    employeeId
  }
}
`;
export const listAddresses = `query ListAddresses(
  $filter: TableAddressFilterInput
  $limit: Int
  $nextToken: String
) {
  listAddresses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      line1
      line2
      city
      state
      zipcode
      employeeId
    }
    nextToken
  }
}
`;
export const queryAddressesByEmployeeIdIndex = `query QueryAddressesByEmployeeIdIndex(
  $employeeId: ID!
  $first: Int
  $after: String
) {
  queryAddressesByEmployeeIdIndex(
    employeeId: $employeeId
    first: $first
    after: $after
  ) {
    items {
      id
      line1
      line2
      city
      state
      zipcode
      employeeId
    }
    nextToken
  }
}
`;
export const getSkill = `query GetSkill($id: ID!) {
  getSkill(id: $id) {
    id
    name
    employeeId
  }
}
`;
export const listSkills = `query ListSkills(
  $filter: TableSkillFilterInput
  $limit: Int
  $nextToken: String
) {
  listSkills(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      employeeId
    }
    nextToken
  }
}
`;
export const querySkillsByEmployeeIdIndex = `query QuerySkillsByEmployeeIdIndex(
  $employeeId: ID!
  $first: Int
  $after: String
) {
  querySkillsByEmployeeIdIndex(
    employeeId: $employeeId
    first: $first
    after: $after
  ) {
    items {
      id
      name
      employeeId
    }
    nextToken
  }
}
`;
