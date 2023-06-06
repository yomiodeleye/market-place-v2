/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $id: String
  ) {
    onCreateUser(filter: $filter, id: $id) {
      id
      title
      fist_name
      last_name
      display_name
      email
      addresses {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $id: String
  ) {
    onUpdateUser(filter: $filter, id: $id) {
      id
      title
      fist_name
      last_name
      display_name
      email
      addresses {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $id: String
  ) {
    onDeleteUser(filter: $filter, id: $id) {
      id
      title
      fist_name
      last_name
      display_name
      email
      addresses {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAddress = /* GraphQL */ `
  subscription OnCreateAddress($filter: ModelSubscriptionAddressFilterInput) {
    onCreateAddress(filter: $filter) {
      id
      fist_name
      last_name
      company_name
      county
      street_address
      postcode
      town
      country
      address_type
      user {
        id
        title
        fist_name
        last_name
        display_name
        email
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userAddressesId
    }
  }
`;
export const onUpdateAddress = /* GraphQL */ `
  subscription OnUpdateAddress($filter: ModelSubscriptionAddressFilterInput) {
    onUpdateAddress(filter: $filter) {
      id
      fist_name
      last_name
      company_name
      county
      street_address
      postcode
      town
      country
      address_type
      user {
        id
        title
        fist_name
        last_name
        display_name
        email
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userAddressesId
    }
  }
`;
export const onDeleteAddress = /* GraphQL */ `
  subscription OnDeleteAddress($filter: ModelSubscriptionAddressFilterInput) {
    onDeleteAddress(filter: $filter) {
      id
      fist_name
      last_name
      company_name
      county
      street_address
      postcode
      town
      country
      address_type
      user {
        id
        title
        fist_name
        last_name
        display_name
        email
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userAddressesId
    }
  }
`;
