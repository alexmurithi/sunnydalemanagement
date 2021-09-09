import { gql } from "@apollo/client";

export const DELETE_PROPERTY_ITEMS = gql`
  mutation deletePropertyItems($id: [Int]!) {
    deletePropertyItems(id: $id) {
      success
      message
    }
  }
`;
