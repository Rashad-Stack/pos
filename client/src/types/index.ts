export type CustomError = Error & {
  status: number;
  statusText: string;
  data: string;
};

export type Category = {
  _id: string;
  name: string;
};

export type Product = {
  _id: string;
  name: string;
  price: number;
  image: string;
};

export type Cart = {
  _id: string;
  quantity: number;
  totalPrice: number;
  product: Product;
};
