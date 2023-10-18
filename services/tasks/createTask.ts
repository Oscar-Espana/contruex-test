import axios from "axios";
import { ITask } from "@/interfaces/Task";

export const createTask = async (task: ITask) => {
  const { data } = await axios.post("/api/tasks", task);
  return data;
};
