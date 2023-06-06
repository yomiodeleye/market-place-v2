/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  title?: string | null,
  fist_name: string,
  last_name: string,
  display_name?: string | null,
  email: string,
};

export type ModelUserConditionInput = {
  title?: ModelStringInput | null,
  fist_name?: ModelStringInput | null,
  last_name?: ModelStringInput | null,
  display_name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  title?: string | null,
  fist_name: string,
  last_name: string,
  display_name?: string | null,
  email: string,
  addresses?: ModelAddressConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelAddressConnection = {
  __typename: "ModelAddressConnection",
  items:  Array<Address | null >,
  nextToken?: string | null,
};

export type Address = {
  __typename: "Address",
  id: string,
  fist_name: string,
  last_name: string,
  company_name?: string | null,
  county: string,
  street_address: string,
  postcode: string,
  town: string,
  country: string,
  address_type?: AddressType | null,
  user?: User | null,
  createdAt: string,
  updatedAt: string,
  userAddressesId?: string | null,
};

export enum AddressType {
  billing = "billing",
  postal = "postal",
}


export type UpdateUserInput = {
  id: string,
  title?: string | null,
  fist_name?: string | null,
  last_name?: string | null,
  display_name?: string | null,
  email?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateAddressInput = {
  id?: string | null,
  fist_name: string,
  last_name: string,
  company_name?: string | null,
  county: string,
  street_address: string,
  postcode: string,
  town: string,
  country: string,
  address_type?: AddressType | null,
  userAddressesId?: string | null,
};

export type ModelAddressConditionInput = {
  fist_name?: ModelStringInput | null,
  last_name?: ModelStringInput | null,
  company_name?: ModelStringInput | null,
  county?: ModelStringInput | null,
  street_address?: ModelStringInput | null,
  postcode?: ModelStringInput | null,
  town?: ModelStringInput | null,
  country?: ModelStringInput | null,
  address_type?: ModelAddressTypeInput | null,
  and?: Array< ModelAddressConditionInput | null > | null,
  or?: Array< ModelAddressConditionInput | null > | null,
  not?: ModelAddressConditionInput | null,
  userAddressesId?: ModelIDInput | null,
};

export type ModelAddressTypeInput = {
  eq?: AddressType | null,
  ne?: AddressType | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateAddressInput = {
  id: string,
  fist_name?: string | null,
  last_name?: string | null,
  company_name?: string | null,
  county?: string | null,
  street_address?: string | null,
  postcode?: string | null,
  town?: string | null,
  country?: string | null,
  address_type?: AddressType | null,
  userAddressesId?: string | null,
};

export type DeleteAddressInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  fist_name?: ModelStringInput | null,
  last_name?: ModelStringInput | null,
  display_name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelAddressFilterInput = {
  id?: ModelIDInput | null,
  fist_name?: ModelStringInput | null,
  last_name?: ModelStringInput | null,
  company_name?: ModelStringInput | null,
  county?: ModelStringInput | null,
  street_address?: ModelStringInput | null,
  postcode?: ModelStringInput | null,
  town?: ModelStringInput | null,
  country?: ModelStringInput | null,
  address_type?: ModelAddressTypeInput | null,
  and?: Array< ModelAddressFilterInput | null > | null,
  or?: Array< ModelAddressFilterInput | null > | null,
  not?: ModelAddressFilterInput | null,
  userAddressesId?: ModelIDInput | null,
};

export type ModelSubscriptionUserFilterInput = {
  title?: ModelSubscriptionStringInput | null,
  fist_name?: ModelSubscriptionStringInput | null,
  last_name?: ModelSubscriptionStringInput | null,
  display_name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionAddressFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  fist_name?: ModelSubscriptionStringInput | null,
  last_name?: ModelSubscriptionStringInput | null,
  company_name?: ModelSubscriptionStringInput | null,
  county?: ModelSubscriptionStringInput | null,
  street_address?: ModelSubscriptionStringInput | null,
  postcode?: ModelSubscriptionStringInput | null,
  town?: ModelSubscriptionStringInput | null,
  country?: ModelSubscriptionStringInput | null,
  address_type?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAddressFilterInput | null > | null,
  or?: Array< ModelSubscriptionAddressFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    title?: string | null,
    fist_name: string,
    last_name: string,
    display_name?: string | null,
    email: string,
    addresses?:  {
      __typename: "ModelAddressConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    title?: string | null,
    fist_name: string,
    last_name: string,
    display_name?: string | null,
    email: string,
    addresses?:  {
      __typename: "ModelAddressConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    title?: string | null,
    fist_name: string,
    last_name: string,
    display_name?: string | null,
    email: string,
    addresses?:  {
      __typename: "ModelAddressConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAddressMutationVariables = {
  input: CreateAddressInput,
  condition?: ModelAddressConditionInput | null,
};

export type CreateAddressMutation = {
  createAddress?:  {
    __typename: "Address",
    id: string,
    fist_name: string,
    last_name: string,
    company_name?: string | null,
    county: string,
    street_address: string,
    postcode: string,
    town: string,
    country: string,
    address_type?: AddressType | null,
    user?:  {
      __typename: "User",
      id: string,
      title?: string | null,
      fist_name: string,
      last_name: string,
      display_name?: string | null,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userAddressesId?: string | null,
  } | null,
};

export type UpdateAddressMutationVariables = {
  input: UpdateAddressInput,
  condition?: ModelAddressConditionInput | null,
};

export type UpdateAddressMutation = {
  updateAddress?:  {
    __typename: "Address",
    id: string,
    fist_name: string,
    last_name: string,
    company_name?: string | null,
    county: string,
    street_address: string,
    postcode: string,
    town: string,
    country: string,
    address_type?: AddressType | null,
    user?:  {
      __typename: "User",
      id: string,
      title?: string | null,
      fist_name: string,
      last_name: string,
      display_name?: string | null,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userAddressesId?: string | null,
  } | null,
};

export type DeleteAddressMutationVariables = {
  input: DeleteAddressInput,
  condition?: ModelAddressConditionInput | null,
};

export type DeleteAddressMutation = {
  deleteAddress?:  {
    __typename: "Address",
    id: string,
    fist_name: string,
    last_name: string,
    company_name?: string | null,
    county: string,
    street_address: string,
    postcode: string,
    town: string,
    country: string,
    address_type?: AddressType | null,
    user?:  {
      __typename: "User",
      id: string,
      title?: string | null,
      fist_name: string,
      last_name: string,
      display_name?: string | null,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userAddressesId?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    title?: string | null,
    fist_name: string,
    last_name: string,
    display_name?: string | null,
    email: string,
    addresses?:  {
      __typename: "ModelAddressConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      title?: string | null,
      fist_name: string,
      last_name: string,
      display_name?: string | null,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAddressQueryVariables = {
  id: string,
};

export type GetAddressQuery = {
  getAddress?:  {
    __typename: "Address",
    id: string,
    fist_name: string,
    last_name: string,
    company_name?: string | null,
    county: string,
    street_address: string,
    postcode: string,
    town: string,
    country: string,
    address_type?: AddressType | null,
    user?:  {
      __typename: "User",
      id: string,
      title?: string | null,
      fist_name: string,
      last_name: string,
      display_name?: string | null,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userAddressesId?: string | null,
  } | null,
};

export type ListAddressesQueryVariables = {
  filter?: ModelAddressFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAddressesQuery = {
  listAddresses?:  {
    __typename: "ModelAddressConnection",
    items:  Array< {
      __typename: "Address",
      id: string,
      fist_name: string,
      last_name: string,
      company_name?: string | null,
      county: string,
      street_address: string,
      postcode: string,
      town: string,
      country: string,
      address_type?: AddressType | null,
      createdAt: string,
      updatedAt: string,
      userAddressesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  id?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    title?: string | null,
    fist_name: string,
    last_name: string,
    display_name?: string | null,
    email: string,
    addresses?:  {
      __typename: "ModelAddressConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  id?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    title?: string | null,
    fist_name: string,
    last_name: string,
    display_name?: string | null,
    email: string,
    addresses?:  {
      __typename: "ModelAddressConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  id?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    title?: string | null,
    fist_name: string,
    last_name: string,
    display_name?: string | null,
    email: string,
    addresses?:  {
      __typename: "ModelAddressConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAddressSubscriptionVariables = {
  filter?: ModelSubscriptionAddressFilterInput | null,
};

export type OnCreateAddressSubscription = {
  onCreateAddress?:  {
    __typename: "Address",
    id: string,
    fist_name: string,
    last_name: string,
    company_name?: string | null,
    county: string,
    street_address: string,
    postcode: string,
    town: string,
    country: string,
    address_type?: AddressType | null,
    user?:  {
      __typename: "User",
      id: string,
      title?: string | null,
      fist_name: string,
      last_name: string,
      display_name?: string | null,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userAddressesId?: string | null,
  } | null,
};

export type OnUpdateAddressSubscriptionVariables = {
  filter?: ModelSubscriptionAddressFilterInput | null,
};

export type OnUpdateAddressSubscription = {
  onUpdateAddress?:  {
    __typename: "Address",
    id: string,
    fist_name: string,
    last_name: string,
    company_name?: string | null,
    county: string,
    street_address: string,
    postcode: string,
    town: string,
    country: string,
    address_type?: AddressType | null,
    user?:  {
      __typename: "User",
      id: string,
      title?: string | null,
      fist_name: string,
      last_name: string,
      display_name?: string | null,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userAddressesId?: string | null,
  } | null,
};

export type OnDeleteAddressSubscriptionVariables = {
  filter?: ModelSubscriptionAddressFilterInput | null,
};

export type OnDeleteAddressSubscription = {
  onDeleteAddress?:  {
    __typename: "Address",
    id: string,
    fist_name: string,
    last_name: string,
    company_name?: string | null,
    county: string,
    street_address: string,
    postcode: string,
    town: string,
    country: string,
    address_type?: AddressType | null,
    user?:  {
      __typename: "User",
      id: string,
      title?: string | null,
      fist_name: string,
      last_name: string,
      display_name?: string | null,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    userAddressesId?: string | null,
  } | null,
};
