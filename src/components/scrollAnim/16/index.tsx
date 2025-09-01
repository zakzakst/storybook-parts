import { useEffect, useRef, useState } from "react";

import clsx from "clsx";

import styles from "./styles.module.css";

type Props = Omit<React.ComponentProps<"ul">, "children">;

const HidePos = 72;

export const ScrollAnim16 = ({ className, ...rest }: Props) => {
  const ticking = useRef(false);
  const scrollPos = useRef(0);
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    const showAnim = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          ticking.current = false;
          const currentPos = window.scrollY;
          if (currentPos < HidePos) {
            // 表示領域内の場合
            setIsShow(true);
          } else if (currentPos < scrollPos.current) {
            // 非表示領域内でスクロール方向が上の場合
            setIsShow(true);
          } else {
            // 非表示領域内でスクロール方向が下の場合
            setIsShow(false);
          }
          // スクロール量を更新
          scrollPos.current = currentPos;
        });
        ticking.current = true;
      }
    };
    window.addEventListener("scroll", showAnim, { passive: true });
    return () => {
      window.removeEventListener("scroll", showAnim);
    };
  }, [setIsShow]);

  return (
    <ul
      className={clsx(styles.module, isShow && styles.isShow, className)}
      {...rest}
    >
      {Array(3)
        .fill(null)
        .map((_, index) => (
          <li key={index}>
            <a href="#">リンク{index}</a>
          </li>
        ))}
    </ul>
  );
};
