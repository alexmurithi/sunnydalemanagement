import {gql} from "@apollo/client";

export const GET_ALL_PROPERTY_ITEMS =gql
`
    query getAllPropertyItems{
        allPropertyItems {
                id,
                title,
                description,
                price,
                location,
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