import {gql} from '@apollo/client';

export const GET_ALL_PROPERTY_TYPES =gql
`
    query getAllPropertyTypes{
        allPropertyTypes{
            id,
            type
        }
    }
`;