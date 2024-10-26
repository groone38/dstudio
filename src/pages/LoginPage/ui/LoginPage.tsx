import { RoutePathPrivate } from "app/providers/config/routeConfig";
import { useAppDispatch, useAppSelector } from "app/providers/config/store";
import { internalLogin } from "entities/model/Auth/services/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "shared/ui/Button/Button";
import Input from "shared/ui/Input/Input";
import Loader from "shared/ui/Loader/Loader";
import cls from "./LoginPage.module.scss";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate(RoutePathPrivate.todos);
    }
  }, []);

  const onSubmit = async () => {
    dispatch(internalLogin({ email, password })).then(() =>
      navigate(RoutePathPrivate.todos)
    );
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={cls.login}>
          <div>
            <p>Email: RyanGosling@yandex.ru</p> <p>Password: Qwe1234!</p>
          </div>
          <h2>Login</h2>
          <Input
            value={email}
            onChange={setEmail}
            label="Email*"
            type="text"
            placeholder="Email..."
          />
          <Input
            value={password}
            onChange={setPassword}
            type="password"
            label="Password*"
            placeholder="Password..."
          />
          <Button onClick={onSubmit}>Sing in</Button>
        </div>
      )}
    </>
  );
};

export default LoginPage;
