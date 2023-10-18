import axios from "axios";
import { ITask } from "@/interfaces/Task";

export const updateTask = async (task: ITask) => {
  const { data } = await axios.put("/api/tasks", task);
  return data;
};
