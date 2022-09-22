import axios from "axios";
import IPurchase from "../interfaces/IPurchase";

const request = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

export const GetPurchase = async (path: string): Promise<[]> => {
  const { data } = await request.get(`${path}`);
  return data;
};

export const CreateNewPurchase = async (path: string, body: IPurchase): Promise<[]> => {
  const { data } = await request.post(`${path}`, body);
  return data;
};

export const DeletePurchase = async (path: string): Promise<[]> => {
  const { data } = await request.delete(`${path}`);
  return data;
};
