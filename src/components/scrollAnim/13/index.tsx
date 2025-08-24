import { useEffect, useRef, useState } from "react";

import { createScope, animate, onScroll } from "animejs";
import clsx from "clsx";

import styles from "./styles.module.css";

import type { Scope } from "animejs";

type OwnProps = {
  heading: string;
};

type Props = Omit<React.ComponentProps<"div">, "children"> & OwnProps;

export const ScrollAnim13 = ({ className, heading, ...rest }: Props) => {
  const root = useRef(null);
  const scope = useRef<Scope>(null);
  const [animProgress, setAnimProgress] = useState<number>(0);

  useEffect(() => {
    scope.current = createScope({ root }).add(() => {
      animate(".animejs", {
        autoplay: onScroll({
          enter: "bottom top",
          leave: "top bottom",
          sync: 0.5,
          // debug: true,
          onUpdate: (e) => {
            const progress = e.progress;
            setAnimProgress(progress);
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
        className={clsx("animejs", styles.module, className)}
        style={{ ["--anim-progress" as string]: animProgress }}
        {...rest}
      >
        <h2 className={styles.heading}>{heading}</h2>
      </div>
    </div>
  );
};
