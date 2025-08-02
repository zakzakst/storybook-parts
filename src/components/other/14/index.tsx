import { useState, useRef } from "react";

import clsx from "clsx";

import { useMousePosOnElement } from "../../../hooks/useMousePosOnElement";

import styles from "./styles.module.css";

type Props = Omit<React.ComponentProps<"div">, "children">;

export const Other14 = ({ className, ...rest }: Props) => {
  const [isCircleActive, setIsCircleActive] = useState(false);
  const textRef = useRef<HTMLDivElement | null>(null);
  const { updatePos: updateCirclePos, pos: circlePos } =
    useMousePosOnElement(textRef);

  const onMouseEnter = (e: React.MouseEvent) => {
    updateCirclePos(e);
    setIsCircleActive(true);
  };

  const onMouseLeave = (e: React.MouseEvent) => {
    updateCirclePos(e);
    setIsCircleActive(false);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    updateCirclePos(e);
  };

  return (
    <div
      className={clsx(styles.module, className)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
      ref={textRef}
      {...rest}
    >
      <div
        className={clsx(styles.circle, isCircleActive && styles.isCircleActive)}
        style={{ left: `${circlePos.x}px`, top: `${circlePos.y}px` }}
      />
    </div>
  );
};
