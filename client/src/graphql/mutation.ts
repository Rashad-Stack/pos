import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Login($loginInput: LoginInput!) {
    login(loginInput: $loginInput) {
      message
      user {
        _id
      }
    }
  }
`;

export const ADD_TO_CART = gql`
  mutation AddToCart($productId: ID!) {
    addToCart(productId: $productId) {
      _id
      quantity
      totalPrice
    }
  }
`;

export const REMOVE_FROM_CART = gql`
  mutation RemoveFromCart($productId: ID!) {
    removeFromCart(productId: $productId) {
      _id
      quantity
      totalPrice
    }
  }
`;

export const INCREASE_QUANTITY = gql`
  mutation IncreaseQuantity($productId: ID!) {
    increaseQuantity(productId: $productId) {
      _id
      quantity
      totalPrice
    }
  }
`;

export const DECREASE_QUANTITY = gql`
  mutation DecreaseQuantity($productId: ID!) {
    decreaseQuantity(productId: $productId) {
      _id
      quantity
      totalPrice
    }
  }
`;
