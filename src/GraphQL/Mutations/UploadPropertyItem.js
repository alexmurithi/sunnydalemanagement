import { gql } from "@apollo/client";

export const UPLOAD_PROPERTY_ITEM = gql`
  mutation uploadPropertyItem(
    $title: String!
    $description: String!
    $propertyId: Int!
    $propertyTypeId: Int!
    $price: Int!
    $county: String!
    $town: String!
    $city: String
    $streetAddress: String!
    $thumbNail: String!
    $agentName: String
    $agentPhone: String
    $no_of_rooms: Int!
    $no_of_bathrooms: Int!
    $createdBy: Int!
    $propertyAmenity: [Int]!
    $propertyExternal: [Int]!
    $file: [String]!
  ) {
    uploadPropertyItem(
      title: $title
      description: $description
      propertyId: $propertyId
      propertyTypeId: $propertyTypeId
      price: $price
      county: $county
      town: $town
      city: $city
      streetAddress: $streetAddress
      thumbNail: $thumbNail
      agentName: $agentName
      agentPhone: $agentPhone
      no_of_rooms: $no_of_rooms
      no_of_bathrooms: $no_of_bathrooms
      createdBy: $createdBy
      propertyAmenity: $propertyAmenity
      propertyExternal: $propertyExternal
      file: $file
    ) {
      success
      message
      propertyItem {
        id
        title
        description
        no_of_bathrooms
        no_of_rooms
        county
        town
        city
        price
        streetAddress
        agentName
        agentPhone
        createdAt
        updatedAt
        property {
          id
          name
        }
        propertyType {
          id
          type
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
        thumbNail {
          id
          path
        }
        user {
          id
          firstName
          lastName
        }
      }
    }
  }
`;
