import { ReactNode } from "react";
import Container from "../container/container";
import "./tooltip.style.css";
export default function Tooltip({
  children,
  text,
}: {
  children?: ReactNode;
  text: string;
}) {
  return (
    <Container className="tooltip">
      {children}
      <span className="tooltiptext">{text}</span>
    </Container>
  );
}
