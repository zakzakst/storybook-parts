import { useRef, useCallback } from "react";

import clsx from "clsx";

import { useMousePosOnElement } from "../../../hooks/useMousePosOnElement";

import styles from "./styles.module.css";

type Props = Omit<React.ComponentProps<"div">, "children">;

const offset = {
  back: 0.03,
  center: 0.04,
  front: 0.05,
} as const;

type OffsetKey = keyof typeof offset;

export const Other16 = ({ className, ...rest }: Props) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { updatePos, pos } = useMousePosOnElement(containerRef);

  const onMouseEnter = (e: React.MouseEvent) => {
    updatePos(e);
  };

  const onMouseLeave = (e: React.MouseEvent) => {
    updatePos(e);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    updatePos(e);
  };

  const imgStyle = useCallback(
    (key: OffsetKey): { transform: string } => {
      return {
        transform: `translate(${pos.offsetCenterX * offset[key]}px, ${
          pos.offsetCenterY * offset[key]
        }px)`,
      };
    },
    [pos]
  );

  return (
    <div
      className={clsx(styles.module, className)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
      ref={containerRef}
      {...rest}
    >
      <div className={styles.back} style={imgStyle("back")}>
        <img src="/other16/img-back.png" alt="" />
      </div>
      <div className={styles.center} style={imgStyle("center")}>
        <img src="/other16/img-center.png" alt="" />
      </div>
      <div className={styles.front} style={imgStyle("front")}>
        <img src="/other16/img-front.png" alt="" />
      </div>
    </div>
  );
};
