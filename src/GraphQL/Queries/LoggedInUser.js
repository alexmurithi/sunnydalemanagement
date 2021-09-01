import { gql } from "@apollo/client";

export const LOGGED_IN_USER = gql`
    query me($id:id){
        me(id:$id){
            id,
            email,
            firstName,
            lastName,
            gender,
            jobTitle,
            createdAt
            roles{
                id,
                name
            }
        }
    }
    `;
