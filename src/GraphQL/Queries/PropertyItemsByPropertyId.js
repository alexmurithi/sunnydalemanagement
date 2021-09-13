import { gql } from "@apollo/client";

export const PROPERTY_ITEMS_BY_PROPERTY_ID = gql`
  query propertyItemsByPropertyId($id: ID!) {
    propertyItemsByPropertyId(id: $id) {
      success
      property {
        id
        name
        propertyItems {
          id
          title
          description
          price
          no_of_rooms
          no_of_bathrooms
          county
          city
          town
          streetAddress
          agentName
          agentPhone
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
          property {
            id
            name
          }
          propertyType {
            id
            type
          }
        }
      }
    }
  }
`;
