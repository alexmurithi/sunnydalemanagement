import {gql} from "@apollo/client";

export const GET_ALL_PROPERTIES =gql
`
    query {
        allProperties{
            id,
            name
        }
    }
`;