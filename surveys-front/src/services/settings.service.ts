import { axiosInstance as axios } from "./axios.service";
import { Setting } from "../models";

export const getAll = async () => {
  try {
    const response = await axios.get("/settings");
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const create = async (settings: Setting) => {
  try {
    const response = await axios.post("/settings", settings);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
