import { useEffect, useRef } from "react";

import {
  createScope,
  createTimeline,
  // animate,
} from "animejs";
import clsx from "clsx";

import styles from "./styles.module.css";

import type { Scope } from "animejs";

type OwnProps = {
  text: string;
};

type Props = Omit<React.ComponentProps<"div">, "children"> & OwnProps;

export const Other05 = ({ className, text, ...rest }: Props) => {
  const root = useRef(null);
  const scope = useRef<Scope>(null);

  useEffect(() => {
    scope.current = createScope({ root }).add((self) => {
      self?.add("close", () => {
        const tl = createTimeline()
          .add(".animejs", {
            y: 30,
            opacity: 0,
            duration: 1000,
          })
          .add(".animejs", {
            display: "none",
          });
        tl.play();

        // animate(".animejs", {
        //   y: 30,
        //   opacity: 0,
        //   duration: 1000,
        //   onComplete: (anim) => {
        //     console.log(anim.targets[0]);
        //   },
        // });
      });
    });
  });

  const onClickClose = () => {
    scope.current?.methods.close();
  };

  return (
    <div ref={root}>
      <div className={clsx("animejs", styles.module, className)} {...rest}>
        <div className={styles.text}>{text}</div>
        <div onClick={onClickClose} className={styles.close}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
            <path d="M150,10A140,140,0,1,0,290,150,140,140,0,0,0,150,10" />
          </svg>
        </div>
      </div>
    </div>
  );
};
