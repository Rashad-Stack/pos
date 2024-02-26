export type CustomError = Error & {
  status: number;
  statusText: string;
  data: string;
};
