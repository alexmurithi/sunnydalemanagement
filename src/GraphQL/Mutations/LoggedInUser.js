import { gql } from "@apollo/client";

export const LOGGED_IN_USER = gql`
    mutation me(id:$id){
        me(id:$id){
            id,
            email,
            firstName,
            lastName,
            gender,
            jobTitle,
            roles{
                id,
                name
            }
        }
    }
    `;
