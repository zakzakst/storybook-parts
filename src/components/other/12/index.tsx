import clsx from "clsx";

import styles from "./styles.module.css";

type OwnProps = {
  text: string;
};

type Props = Omit<React.ComponentProps<"div">, "children"> & OwnProps;

export const Other12 = ({ className, text, ...rest }: Props) => {
  return (
    <div className={clsx(styles.module, className)} {...rest}>
      <div className={styles.loading}>
        {Array(8)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className={styles.loadingItem}
              style={{ ["--index" as string]: index + 1 }}
            />
          ))}
      </div>
      <div className={styles.line}>
        {text.split("").map((c, index) => (
          <span
            key={index}
            className={styles.lineItem}
            style={{ ["--index" as string]: index + 1 }}
          >
            {c}
          </span>
        ))}
      </div>
    </div>
  );
};
