// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateEmployee = `subscription OnCreateEmployee($id: ID, $firstname: String, $lastname: String) {
  onCreateEmployee(id: $id, firstname: $firstname, lastname: $lastname) {
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
export const onUpdateEmployee = `subscription OnUpdateEmployee($id: ID, $firstname: String, $lastname: String) {
  onUpdateEmployee(id: $id, firstname: $firstname, lastname: $lastname) {
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
export const onDeleteEmployee = `subscription OnDeleteEmployee($id: ID, $firstname: String, $lastname: String) {
  onDeleteEmployee(id: $id, firstname: $firstname, lastname: $lastname) {
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
export const onCreateAddress = `subscription OnCreateAddress(
  $id: ID
  $line1: String
  $line2: String
  $city: String
  $state: String
) {
  onCreateAddress(
    id: $id
    line1: $line1
    line2: $line2
    city: $city
    state: $state
  ) {
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
export const onUpdateAddress = `subscription OnUpdateAddress(
  $id: ID
  $line1: String
  $line2: String
  $city: String
  $state: String
) {
  onUpdateAddress(
    id: $id
    line1: $line1
    line2: $line2
    city: $city
    state: $state
  ) {
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
export const onDeleteAddress = `subscription OnDeleteAddress(
  $id: ID
  $line1: String
  $line2: String
  $city: String
  $state: String
) {
  onDeleteAddress(
    id: $id
    line1: $line1
    line2: $line2
    city: $city
    state: $state
  ) {
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
export const onCreateSkill = `subscription OnCreateSkill($id: ID, $name: String, $employeeId: ID) {
  onCreateSkill(id: $id, name: $name, employeeId: $employeeId) {
    id
    name
    employeeId
  }
}
`;
export const onUpdateSkill = `subscription OnUpdateSkill($id: ID, $name: String, $employeeId: ID) {
  onUpdateSkill(id: $id, name: $name, employeeId: $employeeId) {
    id
    name
    employeeId
  }
}
`;
export const onDeleteSkill = `subscription OnDeleteSkill($id: ID, $name: String, $employeeId: ID) {
  onDeleteSkill(id: $id, name: $name, employeeId: $employeeId) {
    id
    name
    employeeId
  }
}
`;
