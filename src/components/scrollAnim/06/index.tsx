import { useEffect, useRef, useState } from "react";

import { createScope, animate, onScroll } from "animejs";
import clsx from "clsx";

import styles from "./styles.module.css";

import type { Scope } from "animejs";

type OwnProps = {
  items: string[];
};

type Props = Omit<React.ComponentProps<"ul">, "children"> & OwnProps;

export const ScrollAnim06 = ({ className, items, ...rest }: Props) => {
  const root = useRef(null);
  const scope = useRef<Scope>(null);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    scope.current = createScope({ root }).add(() => {
      animate(".animejs", {
        autoplay: onScroll({
          enter: "bottom-=50 top",
          leave: "top+=50 bottom",
          // debug: true,
          onEnter: (self) => {
            // console.log("onEnter");
            setIsAnimated(true);
            self.revert();
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
      <ul
        className={clsx(
          "animejs",
          styles.module,
          isAnimated && styles.isAnimated,
          className
        )}
        {...rest}
      >
        {items.map((item, index) => (
          <li
            key={index}
            className={styles.item}
            style={{ ["--item-num" as string]: index }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
