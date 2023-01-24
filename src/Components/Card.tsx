import React, { useState } from "react";

export enum CardVariant {
  outlined = "outlined",
  primary = "primary",
}

interface CardProps {
  width?: string;
  height?: string;
  children?: React.ReactChild;
  variant: CardVariant;
  onClick: (num: number) => void;
}

const Card: React.FC<CardProps> = ({
  width,
  height,
  children,
  variant,
  onClick,
}) => {
  const [state, setState] = useState(0);

  return (
    <div
      onClick={() => onClick(state)}
      style={{
        width,
        height,
        border: variant === "outlined" ? "2px solid black" : "none",
        background: variant === CardVariant.primary ? "orange" : " ",
      }}>
      {children}
    </div>
  );
};
export default Card;
