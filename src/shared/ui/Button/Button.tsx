import React, { ButtonHTMLAttributes, ReactNode } from "react";
import cls from "./Button.module.scss";
interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  disabled?: boolean;
}

const Button = ({ children, disabled, ...other }: Button) => {
  return (
    <button disabled={disabled} className={cls.button} {...other}>
      {children}
    </button>
  );
};

export default Button;
