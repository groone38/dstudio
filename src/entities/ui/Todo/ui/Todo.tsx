import { ITodos } from "entities/api/todos/TodosTypes";
import cls from "./Todo.module.scss";
import { useNavigate } from "react-router-dom";

interface ITodo {
  todo: ITodos;
}

export const Todo = ({ todo }: ITodo) => {
  const navigate = useNavigate();

  const editTodo = () => {
    navigate(`/todo/${todo.id}`);
  };

  return (
    <div
      className={cls.todo + " " + (todo.isCompleted && cls.completed)}
      onClick={editTodo}
    >
      <div className={cls.title}>{todo.title}</div>
      <div className={cls.description}>{todo.description}</div>
      <div className={cls.dueDate}>
        Due date:
        {new Date(todo.dueDate).toISOString().split("T")[0]}
      </div>
    </div>
  );
};
