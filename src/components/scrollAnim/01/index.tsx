import { useEffect, useRef, useState } from "react";

import {
  createScope,
  animate,
  onScroll,
  createTimeline,
  stagger,
} from "animejs";
import clsx from "clsx";

import styles from "./styles.module.css";

import type { Scope } from "animejs";

type OwnProps = {
  text: string;
};

type Props = Omit<React.ComponentProps<"div">, "children"> & OwnProps;

export const ScrollAnim01 = ({ className, text, ...rest }: Props) => {
  // TODO: spanで分割すると読み上げツールを利用した際に不自然になる？確認して必要であれば対応（role=presentation, aria-labelとか使う？）
  const root = useRef(null);
  const [scope, setScope] = useState<Scope>();

  useEffect(() => {
    const _scope = createScope({ root }).add(() => {
      const tl = createTimeline()
        .add(".animejs span", {
          opacity: 0,
          scale: 0,
        })
        .add(".animejs", {
          opacity: 1,
        })
        .add(".animejs span", {
          opacity: 1,
          scale: 1,
          duration: 500,
          ease: "out(2)",
          delay: stagger(100, { ease: "in(1)" }),
        });

      animate(".animejs", {
        autoplay: onScroll({
          enter: "bottom+=50 top",
          leave: "top+=50 bottom",
          // debug: true,
          onEnter: (self) => {
            // console.log("onEnter");
            tl.play();
            self.revert();
          },
        }),
      });
    });
    setScope(_scope);
    return () => scope?.revert();
  }, [scope]);

  return (
    <div ref={root}>
      <div className={clsx("animejs", styles.module, className)} {...rest}>
        {text.split("").map((c, index) => (
          <span key={index} style={{ ["--char-num" as string]: index }}>
            {c}
          </span>
        ))}
      </div>
    </div>
  );
};
