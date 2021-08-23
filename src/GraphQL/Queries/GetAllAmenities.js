import {gql} from "@apollo/client";

export const GET_ALL_AMENITIES =gql
`
    query externals{
        allAmenities{
            id,
            name
        }
    }
`;