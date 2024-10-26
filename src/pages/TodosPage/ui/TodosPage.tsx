import { RoutePathPrivate } from "app/providers/config/routeConfig";
import { useAppDispatch, useAppSelector } from "app/providers/config/store";
import { getTodos } from "entities/model/Todos/services/todos";
import { Todo } from "entities/ui/Todo";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "shared/ui/Button/Button";
import Loader from "shared/ui/Loader/Loader";
import cls from "./TodosPage.module.scss";

const TodosPage = () => {
  const { isLoading, todos } = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={cls.todos}>
          <div className={cls.title}>
            <h2>Todos</h2>
            <Button onClick={() => navigate(RoutePathPrivate.create_todo)}>
              Create todo
            </Button>
          </div>
          <div className={cls.content}>
            {todos.map((todo) => (
              <Todo key={todo.id} todo={todo} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default TodosPage;
