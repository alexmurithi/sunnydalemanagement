import { gql } from "@apollo/client";

export const PROPERTY_ITEM = gql`
  query propertyItem($id: ID!) {
    propertyItem(id: $id) {
      title
      description
      price
      no_of_rooms
      no_of_bathrooms
      town
      city
      county
      streetAddress
      agentName
      agentPhone
      property {
        id
        name
      }
      propertyType {
        id
        type
      }
      thumbNail {
        id
        path
      }
      files {
        id
        path
      }
      externals {
        id
        name
      }
      amenities {
        id
        name
      }
    }
  }
`;
