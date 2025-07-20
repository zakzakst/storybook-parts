import clsx from "clsx";

import styles from "./styles.module.css";

type Props = React.ComponentProps<"a">;

export const Button10 = ({ className, children, ...rest }: Props) => {
  return (
    <a className={clsx(styles.button, className)} {...rest}>
      <span className={styles.text}>{children}</span>
    </a>
  );
};
