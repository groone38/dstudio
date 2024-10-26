import { AuthSchema } from "entities/model/Auth/types/authTypes";
import { TodosSchema } from "entities/model/Todos/types/todosTypes";

export interface StateSchema {
  auth: AuthSchema;
  todos: TodosSchema;
}
