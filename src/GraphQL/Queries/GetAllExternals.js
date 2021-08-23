import {gql} from '@apollo/client';

export const GET_ALL_EXTERNALS =gql
`
    query externals{
        allExternals{
            id,
            name
        }
    }
`;