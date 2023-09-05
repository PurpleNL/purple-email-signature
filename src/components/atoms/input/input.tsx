import "./input.style.css";
import React from "react";

export default function Input({
  onChange,
  value,
  name,
  type,
}: {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  name: string;
  type?: React.HTMLInputTypeAttribute;
}) {
  return <input onChange={onChange} value={value} name={name} type={type} />;
}
