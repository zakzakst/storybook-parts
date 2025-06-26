import clsx from "clsx";
import { FaAngleRight } from "react-icons/fa6";
import styles from "./styles.module.css";

type Props = React.ComponentProps<"a">;

export const Button38 = ({ className, children, ...rest }: Props) => {
  return (
    <a className={clsx(styles.button, className)} {...rest}>
      <span>{children}</span>
      <span className={styles.icon}>
        <FaAngleRight className={styles.arrow} />
      </span>
    </a>
  );
};
