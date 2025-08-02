import { useState, useRef } from "react";

import clsx from "clsx";

import styles from "./styles.module.css";

type Props = Omit<React.ComponentProps<"div">, "children">;

export const Other14 = ({ className, ...rest }: Props) => {
  const [isCircleActive, setIsCircleActive] = useState(false);
  const [circlePos, setCirclePos] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const textRef = useRef<HTMLDivElement | null>(null);

  const updateCirclePos = (e: React.MouseEvent) => {
    if (!textRef.current) return;
    const clientRect = textRef.current.getBoundingClientRect();
    const pointerX = e.pageX - (clientRect.left + window.pageXOffset);
    const pointerY = e.pageY - (clientRect.top + window.pageYOffset);
    const x =
      pointerX < 0
        ? 0
        : pointerX > textRef.current.clientWidth
        ? textRef.current.clientWidth
        : pointerX;
    const y =
      pointerY < 0
        ? 0
        : pointerY > textRef.current.clientHeight
        ? textRef.current.clientHeight
        : pointerY;
    setCirclePos({ x, y });
  };

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
