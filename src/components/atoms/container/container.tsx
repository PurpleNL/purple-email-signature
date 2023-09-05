import { ReactNode } from "react";
import type * as CSS from "csstype";

export default function Container({
  children,
  margin,
  display,
  flexDirection,
  justifyContent,
  alignItems,
  maxWidth,
  width,
  minHeight,
  height,
  backgroundColor,
  fontSize,
  color,
  textAlign,
  padding,
  marginBottom,
  position,
  top,
  right,
  dangerouslySetInnerHTML,
  className,
}: {
  children?: ReactNode;
  margin?: string | number;
  display?: CSS.Properties["display"];
  flexDirection?: CSS.Properties["flexDirection"];
  justifyContent?: CSS.Properties["justifyContent"];
  alignItems?: CSS.Properties["alignItems"];
  maxWidth?: CSS.Properties["maxWidth"];
  width?: CSS.Properties["width"];
  minHeight?: CSS.Properties["minHeight"];
  height?: CSS.Properties["height"];
  backgroundColor?: CSS.Properties["backgroundColor"];
  fontSize?: CSS.Properties["backgroundColor"];
  color?: CSS.Properties["color"];
  textAlign?: CSS.Properties["textAlign"];
  padding?: CSS.Properties["padding"];
  marginBottom?: CSS.Properties["marginBottom"];
  position?: CSS.Properties["position"];
  top?: CSS.Properties["top"];
  right?: CSS.Properties["right"];
  dangerouslySetInnerHTML?: { __html: string };
  className?: string;
}) {
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      style={{
        margin,
        display,
        flexDirection,
        justifyContent,
        alignItems,
        maxWidth,
        width,
        minHeight,
        height,
        backgroundColor,
        fontSize,
        color,
        textAlign,
        padding,
        marginBottom,
        position,
        top,
        right,
      }}
    >
      {children}
    </div>
  );
}
