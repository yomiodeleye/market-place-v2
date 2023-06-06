/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        fist_name
        last_name
        display_name
        email
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAddress = /* GraphQL */ `
  query GetAddress($id: ID!) {
    getAddress(id: $id) {
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
export const listAddresses = /* GraphQL */ `
  query ListAddresses(
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAddresses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        createdAt
        updatedAt
        userAddressesId
      }
      nextToken
    }
  }
`;
