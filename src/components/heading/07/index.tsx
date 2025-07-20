import clsx from "clsx";

import styles from "./styles.module.css";

type Props = Omit<React.ComponentProps<"h3">, "children">;

export const Heading07 = ({ className, ...rest }: Props) => {
  return (
    <h3 className={clsx(styles.module, className)} {...rest}>
      <span className={styles.num}>01</span>見出しが
      <em>入ります</em>
    </h3>
  );
};
