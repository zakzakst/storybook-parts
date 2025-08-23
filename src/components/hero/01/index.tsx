import { useEffect, useRef, useState } from "react";

import { createScope, animate, onScroll } from "animejs";
import clsx from "clsx";

import styles from "./styles.module.css";

import type { Scope } from "animejs";

type OwnProps = {
  title1: string;
  title2: string;
  subTitle1: string;
  subTitle2: string;
  thumbnail: string;
};

type Props = Omit<React.ComponentProps<"div">, "children"> & OwnProps;

export const Hero01 = ({
  className,
  title1,
  title2,
  subTitle1,
  subTitle2,
  thumbnail,
  ...rest
}: Props) => {
  const root = useRef(null);
  const scope = useRef<Scope>(null);
  const [animProgress, setAnimProgress] = useState<number>(0);

  useEffect(() => {
    scope.current = createScope({ root }).add(() => {
      animate(".animejs", {
        autoplay: onScroll({
          enter: "top top",
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
        className={clsx(styles.module, className)}
        style={{ ["--anim-progress" as string]: animProgress }}
        {...rest}
      >
        <div className={clsx("animejs", styles.kv)}>
          <div className={styles.kvTitle}>
            <span className={styles.kvSubTitle}>
              <span>{subTitle1}</span>
              <span>{subTitle2}</span>
            </span>
            <span className={styles.kvMainTitle}>
              <span>{title1}</span>
              <span>{title2}</span>
            </span>
          </div>
          <div className={styles.kvBg}>
            <img src={thumbnail} />
          </div>
        </div>
        <div className={styles.content}>
          {Array(20)
            .fill(null)
            .map((_, index) => (
              <p key={index}>
                テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
              </p>
            ))}
        </div>
      </div>
    </div>
  );
};
