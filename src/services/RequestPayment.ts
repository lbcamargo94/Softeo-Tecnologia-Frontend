import axios from "axios";
import IPayment from "../interfaces/IPayment";

const request = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

export const requestGetMethod = async (path: string): Promise<[]> => {
  const { data } = await request.get(`${path}`);
  return data;
};

export const CreateNewCustomer = async (path: string, body: IPayment): Promise<[]> => {
  const { data } = await request.post(`${path}`, body);
  return data;
};
