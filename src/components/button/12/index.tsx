import clsx from "clsx";
import styles from "./styles.module.css";

type Props = React.ComponentProps<"a">;

export const Button12 = ({ className, children, ...rest }: Props) => {
  return (
    <a className={clsx(styles.button, className)} {...rest}>
      {children}
      <span className={styles.arrow} />
    </a>
  );
};
