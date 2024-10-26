import { useAppDispatch, useAppSelector } from "app/providers/config/store";
import { createTodo } from "entities/model/Todos/services/todos";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "shared/ui/Button/Button";
import Checkbox from "shared/ui/Checkbox/Checkbox";
import Input from "shared/ui/Input/Input";
import cls from "./CreateTodoPage.module.scss";
import { RoutePathPrivate } from "app/providers/config/routeConfig";
import Loader from "shared/ui/Loader/Loader";

const TodoPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [dueDate, setDueDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const isLoading = useAppSelector((state) => state.todos.isLoading);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onCreateTodo = async () => {
    dispatch(createTodo({ title, description, isCompleted, dueDate })).then(
      () => navigate(RoutePathPrivate.todos)
    );
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={cls.todo}>
          <h2>Create Todo</h2>
          <Input
            value={title}
            onChange={setTitle}
            label="Title"
            type="text"
            placeholder="Enter title"
          />
          <Input
            value={description}
            onChange={setDescription}
            type="text"
            label="Description"
            placeholder="Enter description"
          />
          <Input
            type="date"
            label="Due date"
            value={dueDate}
            onChange={(event) => setDueDate(event)}
          />
          <Checkbox
            label="Completed"
            checked={isCompleted}
            onChange={() => setIsCompleted(!isCompleted)}
          />
          <div className={cls.buttons}>
            <Button onClick={onCreateTodo}>Create todo</Button>
            <Button onClick={() => navigate(-1)}>Back</Button>
          </div>
        </div>
      )}
    </>
  );
};

export default TodoPage;
