import clsx from "clsx";

import styles from "./styles.module.css";

type Props = React.ComponentProps<"div">;

export const Other22 = ({ className, children, ...rest }: Props) => {
  return (
    <div className={clsx(styles.module, className)} {...rest}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.contentInner}>{children}</div>
        </div>
      </div>
    </div>
  );
};
