import { ITodos } from "entities/api/todos/TodosTypes";

export interface TodosSchema {
  isLoading: boolean;
  todos: ITodos[];
  todo: ITodos | null;
}
