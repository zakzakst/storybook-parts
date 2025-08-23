import { useEffect, useRef, useState } from "react";

import { createScope, animate, onScroll } from "animejs";
import clsx from "clsx";

import styles from "./styles.module.css";

import type { Scope } from "animejs";

type OwnProps = {
  text1: string;
  text2: string;
};

type Props = Omit<React.ComponentProps<"h3">, "children"> & OwnProps;

export const ScrollAnim12 = ({ className, text1, text2, ...rest }: Props) => {
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
          onEnter: (self) => {
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
      <h3
        className={clsx(
          "animejs",
          styles.module,
          isAnimated && styles.isAnimated,
          className
        )}
        {...rest}
      >
        <span className={styles.line}>
          <span className={styles.text}>
            {text1.split("").map((c, index) => (
              <span
                key={index}
                className={styles.lineItem}
                style={{ ["--index" as string]: index + 1 }}
              >
                {c}
              </span>
            ))}
          </span>
          <span className={styles.border} />
        </span>
        <br />
        <span className={styles.line}>
          <span className={styles.text}>
            {text2.split("").map((c, index) => (
              <span
                key={index}
                className={styles.lineItem}
                style={{ ["--index" as string]: index + 1 }}
              >
                {c}
              </span>
            ))}
          </span>
          <span className={styles.border} />
        </span>
      </h3>
    </div>
  );
};
