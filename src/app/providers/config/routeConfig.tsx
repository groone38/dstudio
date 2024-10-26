import { CreateTodoPageAsync } from "pages/CreateTodoPage";
import { EditTodoPageAsync } from "pages/EditTodoPage";
import { LoginPageAsync } from "pages/LoginPage";
import { TodosPageAsync } from "pages/TodosPage";
import { RouteProps } from "react-router-dom";

export enum AppRoutesPrivate {
  TODOS = "todos",
  CREATE_TODO = "create_todo",
  UPDATE_TODO = "update_todo",
}

export enum AppRoutes {
  LOGIN = "login",
}

export const RoutePathPrivate: Record<AppRoutesPrivate, string> = {
  [AppRoutesPrivate.TODOS]: "/",
  [AppRoutesPrivate.CREATE_TODO]: "/create-todo",
  [AppRoutesPrivate.UPDATE_TODO]: "/todo/:id",
};

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.LOGIN]: "/login",
};

export const routerConfigPrivate: Record<AppRoutesPrivate, RouteProps> = {
  [AppRoutesPrivate.TODOS]: {
    path: RoutePathPrivate.todos,
    element: <TodosPageAsync />,
  },
  [AppRoutesPrivate.CREATE_TODO]: {
    path: RoutePathPrivate.create_todo,
    element: <CreateTodoPageAsync />,
  },
  [AppRoutesPrivate.UPDATE_TODO]: {
    path: RoutePathPrivate.update_todo,
    element: <EditTodoPageAsync />,
  },
};

export const routerConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.LOGIN]: {
    path: RoutePath.login,
    element: <LoginPageAsync />,
  },
};
