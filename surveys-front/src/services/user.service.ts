import { axiosInstance as axios } from "./axios.service";
import { User } from "../models"

export const getUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get("/users");
    return response.data as User[];
  } catch (error) {
    throw new Error(error);
  }
};

export const createUser = async ({_id, ...rest}: User) => {
  try {
    const response = await axios.post("/users", rest);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};