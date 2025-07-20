import { useState, useEffect } from "react";

import clsx from "clsx";

import styles from "./styles.module.css";

type Props = Omit<React.ComponentProps<"h3">, "children">;

export const Heading06 = ({ className, ...rest }: Props) => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimated(true);
    }, 1000);
  }, []);

  return (
    <h3
      className={clsx(styles.module, animated && styles.animated, className)}
      {...rest}
    >
      <span className={styles.text}>
        <span>見出しが</span>
      </span>
      <span className={styles.text}>
        <span>入ります</span>
      </span>
    </h3>
  );
};
