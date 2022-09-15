import axios from "axios";

const request = axios.create({
  baseURL: process.env.SERVER_URL ?? 'http://localhost:3001',
})

const requestGetMethod = async (path: string): Promise<[]> => {
  const { data } = await request.get(`${path}`);
  return data;
}

const CreateNewCustomer = async (path: string, body: Customer): Promise<[]> => {
  const { data } = await request.post(`${path}`, body);
  return data;
}

const requestPatchMethod = async (path: string, body): Promise<[]> => {
  const { data } = await request.patch(`${path}`, body);
  return data;
}

const requestDeleteMethod = async (path: string, body): Promise<[]> => {
  const { data } = await request.delete(`${path}`, body);
  return data;
}
