import { gql } from "@apollo/client";

export const SESSION = gql`
  query GetSession {
    session {
      _id
      email
    }
  }
`;
