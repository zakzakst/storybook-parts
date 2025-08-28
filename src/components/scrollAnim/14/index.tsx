import { useEffect, useRef } from "react";

import { createScope, animate, onScroll } from "animejs";
import clsx from "clsx";

import styles from "./styles.module.css";

import type { Scope } from "animejs";

type OwnProps = {
  thumbnail: string;
};

type Props = Omit<React.ComponentProps<"div">, "children"> & OwnProps;

const OffsetBg = 180;

export const ScrollAnim14 = ({ className, thumbnail, ...rest }: Props) => {
  const root = useRef(null);
  const scope = useRef<Scope>(null);

  useEffect(() => {
    scope.current = createScope({ root }).add(() => {
      animate(".animejs", {
        y: -1 * OffsetBg,
        autoplay: onScroll({
          enter: "bottom top",
          leave: "top bottom",
          sync: 0.5,
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
        <div className={styles.imgWrapper}>
          <div
            className={clsx("animejs", styles.img)}
            style={{ ["--offset-bg" as string]: `-${OffsetBg}px` }}
          >
            <img src={thumbnail} />
          </div>
        </div>
      </div>
    </div>
  );
};
