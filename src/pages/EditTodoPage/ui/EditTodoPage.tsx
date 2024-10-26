import { useAppDispatch, useAppSelector } from "app/providers/config/store";
import { ITodos } from "entities/api/todos/TodosTypes";
import { getTodo, updateTodo } from "entities/model/Todos/services/todos";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "shared/ui/Button/Button";
import Checkbox from "shared/ui/Checkbox/Checkbox";
import Input from "shared/ui/Input/Input";
import Loader from "shared/ui/Loader/Loader";
import cls from "./EditTodoPage.module.scss";
import { RoutePathPrivate } from "app/providers/config/routeConfig";

const EditTodoPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [dueDate, setDueDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const isLoading = useAppSelector((state) => state.todos.isLoading);
  const dispatch = useAppDispatch();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (params.id) {
      dispatch(getTodo(params.id)).then(({ payload }) => {
        const data = payload as ITodos;
        setTitle(data.title);
        setDescription(data.description);
        setIsCompleted(data.isCompleted);
        setDueDate(new Date(data.dueDate).toISOString().split("T")[0]);
      });
    }
  }, []);

  const onUpdateTodo = () => {
    dispatch(
      updateTodo({ id: params.id, title, description, isCompleted, dueDate })
    ).then(() => {
      navigate(RoutePathPrivate.todos);
    });
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={cls.todo}>
          <h2>Todo</h2>
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
            <Button onClick={onUpdateTodo}>Update todo</Button>
            <Button onClick={() => navigate(-1)}>Back</Button>
          </div>
        </div>
      )}
    </>
  );
};

export default EditTodoPage;
