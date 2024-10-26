import api from "entities/config/instance";
import { AxiosResponse } from "axios";
import { ITodos } from "./TodosTypes";

class TodosApi {
  getTodos(): Promise<AxiosResponse<ITodos[]>> {
    return api.get<ITodos[]>("Todos");
  }

  getTodo(id: string): Promise<AxiosResponse<ITodos>> {
    return api.get<ITodos>(`Todos/${id}`);
  }

  updateTodo(data: Omit<ITodos, "createdAt" | "updatedAt">) {
    return api.put(`Todos/${data.id}`, {
      title: data.title,
      description: data.description,
      isCompleted: data.isCompleted,
      dueDate: data.dueDate,
    });
  }

  createTodo(data: Omit<ITodos, "id" | "createdAt" | "updatedAt">) {
    return api.post("Todos", {
      title: data.title,
      description: data.description,
      isCompleted: data.isCompleted,
      dueDate: data.dueDate,
    });
  }
}

export default TodosApi;
