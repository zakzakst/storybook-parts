import clsx from "clsx";

import styles from "./styles.module.css";

type Props = Omit<React.ComponentProps<"div">, "children">;

export const Other10 = ({ className, ...rest }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={clsx(styles.module, className)} {...rest}>
        <div className={styles.img} />
      </div>
    </div>
  );
};
