import { gql } from '@apollo/client';

export const ALL_WA_MESSAGES = gql`
    query AllWAMessages{
    allWaMessages{
        id
        title
        messageBody
        status
        createdOn
    }
}`;