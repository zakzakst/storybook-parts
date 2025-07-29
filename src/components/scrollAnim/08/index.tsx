import { useEffect, useRef, useState } from "react";

import { createScope, animate, onScroll } from "animejs";
import clsx from "clsx";
import { FaArrowRight } from "react-icons/fa6";

import styles from "./styles.module.css";

import type { Scope } from "animejs";

type Item = {
  href: string;
  thumbnail: string;
  year: number;
};

type OwnProps = {
  items: Item[];
};

type Props = Omit<React.ComponentProps<"ul">, "children"> & OwnProps;

export const ScrollAnim08 = ({ className, items, ...rest }: Props) => {
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
      <ul
        className={clsx(
          "animejs",
          styles.module,
          isAnimated && styles.isAnimated,
          className
        )}
        {...rest}
      >
        {items.map((item, index) => (
          <li
            key={index}
            className={styles.item}
            style={{ ["--item-num" as string]: index }}
          >
            <a className={styles.link} href={item.href}>
              <div className={styles.thumbnail}>
                <img src={item.thumbnail} alt="" />
              </div>
              <p className={styles.text}>
                {item.year}
                <FaArrowRight className={styles.arrow} />
              </p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
