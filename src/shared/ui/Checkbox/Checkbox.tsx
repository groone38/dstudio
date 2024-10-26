import React, { ChangeEvent, InputHTMLAttributes } from "react";
import cls from "./Checkbox.module.scss";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

interface Checkbox extends HTMLInputProps {
  checked: boolean;
  label?: string;
  onChange?: (value: string) => void;
}

const Checkbox = ({
  checked,
  label,
  onChange,
  placeholder,
  disabled,
  ...otherProps
}: Checkbox) => {
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className={cls.input}>
      <label>
        <input
          className={cls.checkbox}
          type="checkbox"
          checked={checked}
          onChange={onChangeHandler}
          placeholder={placeholder}
          disabled={disabled}
          {...otherProps}
        />
        <span className={cls.custom_checkbox}></span>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
