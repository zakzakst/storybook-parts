import { useEffect, useRef, useState } from "react";

import { createScope, animate, onScroll } from "animejs";
import clsx from "clsx";

import styles from "./styles.module.css";

import type { Scope } from "animejs";

type OwnProps = {
  text: string;
};

type Props = Omit<React.ComponentProps<"div">, "children"> & OwnProps;

export const ScrollAnim11 = ({ className, text, ...rest }: Props) => {
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
      <div
        className={clsx(
          "animejs",
          styles.module,
          isAnimated && styles.isAnimated,
          className
        )}
        data-text={text}
        {...rest}
      >
        <span>{text}</span>
      </div>
    </div>
  );
};
