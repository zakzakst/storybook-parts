import clsx from "clsx";

import styles from "./styles.module.css";

type Props = React.ComponentProps<"a">;

export const Button27 = ({ className, children, ...rest }: Props) => {
  return (
    <a className={clsx(styles.button, className)} {...rest}>
      <span>{children}</span>
    </a>
  );
};
