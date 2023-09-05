import { ReactNode, MouseEventHandler } from "react";
import "./button.style.css";

export default function Button({
  children,
  onClick,
  title,
  isIcon,
}: {
  children: ReactNode | string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  title?: string;
  isIcon?: boolean;
}) {
  return (
    <button
      className={isIcon ? "icon-button" : "main-button"}
      onClick={onClick}
      title={title}
    >
      {children}
    </button>
  );
}
