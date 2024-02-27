export type CustomError = Error & {
  status: number;
  statusText: string;
  data: string;
};

export type Category = {
  _id: string;
  name: string;
};
