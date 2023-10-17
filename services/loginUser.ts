import { IUserLogin } from "@/interfaces/User";
import axios from "axios";

export const loginUser = async (userLogin: IUserLogin) => {
  const { data } = await axios.post("/api/login", userLogin);
  return data as { accessToken: string; expiresIn: string };
};
