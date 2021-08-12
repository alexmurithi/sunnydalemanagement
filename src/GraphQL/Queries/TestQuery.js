import {gql} from "@apollo/client";

export const GET_All_PROPERTY_ITEMS =gql
`
    query GetAllPropertyItems{
        allPropertyItems{
            id,
            title
        }
    }
`;