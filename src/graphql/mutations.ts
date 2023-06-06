/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createAddress = /* GraphQL */ `
  mutation CreateAddress(
    $input: CreateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    createAddress(input: $input, condition: $condition) {
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
export const updateAddress = /* GraphQL */ `
  mutation UpdateAddress(
    $input: UpdateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    updateAddress(input: $input, condition: $condition) {
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
export const deleteAddress = /* GraphQL */ `
  mutation DeleteAddress(
    $input: DeleteAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    deleteAddress(input: $input, condition: $condition) {
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
