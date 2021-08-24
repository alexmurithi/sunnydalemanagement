import {gql} from "@apollo/client";

export const GET_ALL_PROPERTY_ITEMS =gql
`
    query getAllPropertyItems{
        allPropertyItems {
                id,
                title,
                description,
                price,
                streetAddress,
                no_of_rooms,
                no_of_bathrooms,
                county,
                town,
                city,
                agentName,
                agentPhone,
            property {
                id,
                name
            },
            propertyType {
                id,
                type
            },
            files {
                id,
                path
            }
           
  }
    }
`;