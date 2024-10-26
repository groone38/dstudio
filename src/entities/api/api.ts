import InternalLoginApi from "./auth/InternalLoginApi";
import TodosApi from "./todos/TodosApi";
class Api {
  internalLoginApi = new InternalLoginApi();
  todosApi = new TodosApi();
}

const api = new Api();
export default api;
