import { gql } from "@apollo/client";

export const DELETE_PROPERTY_ITEMS = gql`
  mutation deletePropertyItems($id: [ID!]!) {
    deletePropertyItems(id: $id) {
      success
      message
    }
  }
`;
