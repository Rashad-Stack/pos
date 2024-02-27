import { gql } from "@apollo/client";

export const SESSION = gql`
  query GetSession {
    session {
      _id
      email
    }
  }
`;

export const GET_ALL_CATEGORIES = gql`
  query GetAllCategory($limit: Int, $page: Int) {
    getAllCategory(limit: $limit, page: $page) {
      total
      pages
      categories {
        _id
        name
      }
    }
  }
`;
