import { useEffect, useRef } from "react";

import { createScope, animate, onScroll } from "animejs";
import clsx from "clsx";

import styles from "./styles.module.css";

import type { Scope } from "animejs";

type OwnProps = {
  text: string;
};

type Props = Omit<React.ComponentProps<"div">, "children"> & OwnProps;

export const Other18 = ({ className, text, ...rest }: Props) => {
  const root = useRef(null);
  const scope = useRef<Scope>(null);

  useEffect(() => {
    scope.current = createScope({ root }).add(() => {
      animate(".animejs", {
        rotate: {
          from: -20,
          to: 20,
        },
        autoplay: onScroll({
          enter: "bottom-=100 top",
          leave: "top+=100 bottom",
          sync: 0.5,
          // sync: true,
          // debug: true,
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
      <div className={clsx(styles.module, className)} {...rest}>
        <div className={styles.content}>
          <div className={styles.spacer} />
          <div className={styles.inner}>
            <div className={styles.text} data-text-pos="back">
              <span>{text}</span>
            </div>
            <div className={clsx("animejs", styles.img)}>
              <img src="https://picsum.photos/id/238/450/800" />
            </div>
            <div className={styles.text} data-text-pos="front">
              <span>{text}</span>
            </div>
          </div>
          <div className={styles.spacer} />
        </div>
        <div className={styles.bg} />
      </div>
    </div>
  );
};
