import React, { ChangeEvent, InputHTMLAttributes } from "react";
import cls from "./Input.module.scss";
type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

interface Input extends HTMLInputProps {
  value?: string | number;
  label?: string;
  onChange?: (value: string) => void;
}

const Input = ({
  value,
  onChange,
  placeholder,
  type = "text",
  disabled,
  label,
  ...otherProps
}: Input) => {
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className={cls.input}>
      <label>
        {label}
        <input
          type={type}
          value={value}
          onChange={onChangeHandler}
          placeholder={placeholder}
          disabled={disabled}
          {...otherProps}
        />
      </label>
    </div>
  );
};

export default Input;
