import { useEffect, useRef, useState } from "react";

import { createScope, animate, onScroll } from "animejs";
import clsx from "clsx";

import styles from "./styles.module.css";

import type { Scope } from "animejs";

type OwnProps = {
  heading: string;
  text: string;
};

type Props = Omit<React.ComponentProps<"section">, "children"> & OwnProps;

export const ScrollAnim07 = ({ className, heading, text, ...rest }: Props) => {
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
      <section
        className={clsx(
          "animejs",
          styles.module,
          isAnimated && styles.isAnimated,
          className
        )}
        {...rest}
      >
        <h2 className={styles.heading}>
          <span>{heading}</span>
        </h2>
        <p className={styles.text}>{text}</p>
      </section>
    </div>
  );
};
