import clsx from "clsx";
import { FaRightLong } from "react-icons/fa6";

import styles from "./styles.module.css";

type Props = React.ComponentProps<"a">;

export const Button33 = ({ className, children, ...rest }: Props) => {
  return (
    <a className={clsx(styles.button, className)} {...rest}>
      {children}
      <span className={styles.icon}>
        <FaRightLong className={styles.arrow} />
      </span>
    </a>
  );
};
