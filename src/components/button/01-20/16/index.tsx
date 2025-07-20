import clsx from "clsx";

import styles from "./styles.module.css";

type Props = React.ComponentProps<"a">;

export const Button16 = ({ className, children, ...rest }: Props) => {
  return (
    <a className={clsx(styles.button, className)} {...rest}>
      {children}
      <span className={styles.icon}>
        <span className={styles.iconDot}>
          {Array(3)
            .fill(null)
            .map((_, index) => (
              <span key={index} style={{ ["--dot-num" as string]: index }} />
            ))}
        </span>
        <span className={styles.iconArrow} />
      </span>
    </a>
  );
};
