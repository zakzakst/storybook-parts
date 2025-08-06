import clsx from "clsx";

import styles from "./styles.module.css";

type OwnProps = {
  num: string;
  text: string;
};

type Props = Omit<React.ComponentProps<"div">, "children"> & OwnProps;

export const Other21 = ({ className, num, text, ...rest }: Props) => {
  return (
    <div className={clsx(styles.module, className)} {...rest}>
      <div className={styles.bg} />
      <div className={styles.content}>
        <svg
          className={styles.line}
          viewBox="0 0 192 192"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle className={styles.lineBase} cx="96" cy="96" r="89" />
          <path
            className={styles.lineValue}
            d="M96 7C145.153 7 185 46.8467 185 96C185 145.153 145.153 185 96 185C46.8467 185 7 145.153 7 96C7 81.0551 10.6836 66.9705 17.1924 54.6047"
          />
        </svg>
        <div className={styles.num}>
          <span>{num}</span>
          <span className={styles.numUnit}>%</span>
        </div>
      </div>
      <div className={styles.popContainer}>
        <div className={styles.pop}>{text}</div>
      </div>
      <div className={styles.cover}>
        <div className={styles.coverName}>{text}</div>
      </div>
    </div>
  );
};
