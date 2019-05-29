// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateEmployee = `subscription OnCreateEmployee {
  onCreateEmployee {
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
export const onUpdateEmployee = `subscription OnUpdateEmployee {
  onUpdateEmployee {
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
export const onDeleteEmployee = `subscription OnDeleteEmployee {
  onDeleteEmployee {
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
export const onCreateAddress = `subscription OnCreateAddress {
  onCreateAddress {
    line1
    line2
    city
    state
    zipcode
  }
}
`;
export const onUpdateAddress = `subscription OnUpdateAddress {
  onUpdateAddress {
    line1
    line2
    city
    state
    zipcode
  }
}
`;
export const onDeleteAddress = `subscription OnDeleteAddress {
  onDeleteAddress {
    line1
    line2
    city
    state
    zipcode
  }
}
`;
export const onCreateSkill = `subscription OnCreateSkill {
  onCreateSkill {
    id
    name
  }
}
`;
export const onUpdateSkill = `subscription OnUpdateSkill {
  onUpdateSkill {
    id
    name
  }
}
`;
export const onDeleteSkill = `subscription OnDeleteSkill {
  onDeleteSkill {
    id
    name
  }
}
`;
