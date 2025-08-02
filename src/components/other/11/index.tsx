import { useEffect, useRef } from "react";

import { createScope, createTimeline, stagger } from "animejs";
import clsx from "clsx";

import styles from "./styles.module.css";

import type { Scope } from "animejs";

type OwnProps = {
  text1: string;
  text2: string;
  text3: string;
};

type Props = Omit<React.ComponentProps<"div">, "children"> & OwnProps;

export const Other11 = ({ className, text1, text2, text3, ...rest }: Props) => {
  const root = useRef(null);
  const scope = useRef<Scope>(null);

  useEffect(() => {
    scope.current = createScope({ root }).add(() => {
      const tl = createTimeline()
        .add(
          ".text1 span",
          {
            display: "inline",
          },
          stagger(150)
        )
        .add(
          ".text1 span",
          {
            display: "none",
          },
          stagger(100, { from: "last" })
        )
        .add(
          ".text2 span",
          {
            display: "inline",
          },
          stagger(150)
        )
        .add(
          ".text2 span",
          {
            display: "none",
          },
          stagger(100, { from: "last" })
        )
        .add(
          ".text3 span",
          {
            display: "inline",
          },
          stagger(150)
        );

      tl.play();
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
        <span className="text1">
          {text1.split("").map((c, index) => (
            <span key={`text1-${index}`}>{c}</span>
          ))}
        </span>
        <span className="text2">
          {text2.split("").map((c, index) => (
            <span key={`text2-${index}`}>{c}</span>
          ))}
        </span>
        <span className="text3">
          {text3.split("").map((c, index) => (
            <span key={`text3-${index}`}>{c}</span>
          ))}
        </span>
      </div>
    </div>
  );
};
