import { useEffect, useRef, useState } from "react";

import { createScope, animate, onScroll } from "animejs";
import clsx from "clsx";

import styles from "./styles.module.css";

import type { Scope } from "animejs";

type Props = Omit<React.ComponentProps<"div">, "children">;

export const ScrollAnim15 = ({ className, ...rest }: Props) => {
  const root = useRef(null);
  const scope = useRef<Scope>(null);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    scope.current = createScope({ root }).add(() => {
      animate(".animejs", {
        autoplay: onScroll({
          enter: "bottom-=100 top",
          leave: "top+=100 bottom",
          // debug: true,
          onEnter: () => {
            setIsAnimated(true);
          },
          onLeave: () => {
            setIsAnimated(false);
          },
        }),
      });
    });
    return () => {
      if (scope.current) {
        scope.current.revert();
      }
    };
  }, []);

  return (
    <div ref={root}>
      <div
        className={clsx(
          "animejs",
          styles.module,
          isAnimated && styles.isAnimated,
          className
        )}
        {...rest}
      >
        {Array(10)
          .fill(null)
          .map((_, index) => (
            <p key={index}>
              テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
            </p>
          ))}
      </div>
    </div>
  );
};
