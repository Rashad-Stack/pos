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

export const GET_ALL_PRODUCTS = gql`
  query GetAllProducts($limit: Int, $page: Int, $filter: ID, $search: String) {
    allProducts(limit: $limit, page: $page, filter: $filter, search: $search) {
      total
      pages
      products {
        _id
        name
        price
        image
      }
    }
  }
`;

export const ALL_CARTS = gql`
  query AllCarts($limit: Int, $page: Int) {
    allCarts(limit: $limit, page: $page) {
      total
      pages
      carts {
        _id
        totalPrice
        quantity
        product {
          _id
          name
          price
        }
      }
    }
  }
`;
