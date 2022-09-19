import axios from "axios";
import ICustomer from "../interfaces/ICustomer";

const request = axios.create({
  baseURL: process.env.SERVER_URL || "http://localhost:3001",
});

export const GetCustomer = async (path: string): Promise<[]> => {
  const { data } = await request.get(`${path}`);
  return data;
};

export const CreateNewCustomer = async (path: string, body: ICustomer): Promise<[]> => {
  const { data } = await request.post(`${path}`, body);
  return data;
};

export const UpdateCustomer = async (path: string, body: ICustomer): Promise<[]> => {
  const { data } = await request.patch(`${path}`, body);
  return data;
};

export const DeleteCustomer = async (path: string): Promise<[]> => {
  const { data } = await request.delete(`${path}`);
  return data;
};
