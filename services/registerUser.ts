import { IUserLogin } from "@/interfaces/User";
import axios from "axios";

export const registerUser = async (userRegister: IUserLogin) => {
  const { data } = await axios.post("/api/register", userRegister);
  return data;
};
