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

export const createSetting = async ({_id, ...rest}: Setting) => {
  try {
    const response = await axios.post("/settings", rest);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateSetting = async (settings: Setting) => {
  try {
    const response = await axios.put("/settings", settings);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteSetting = async (id: string) => {
  try {
    await axios.delete(`/settings?id=${id}`)
  } catch (error) {
    throw new Error(error);
  }
}
