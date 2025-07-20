import clsx from "clsx";

import styles from "./styles.module.css";

type OwnProps = {
  thumbnail: string;
  text: string;
};

type Props = Omit<React.ComponentProps<"a">, "children"> & OwnProps;

export const Card19 = ({ className, thumbnail, text, ...rest }: Props) => {
  return (
    <a className={clsx(styles.card, className)} {...rest}>
      <div className={styles.thumbnail}>
        <img src={thumbnail} alt="" />
      </div>
      <div className={styles.borderContainer}>
        <div className={styles.border} data-border-pos="top-right" />
        <div className={styles.border} data-border-pos="bottom-left" />
      </div>
      <div className={styles.text}>{text}</div>
    </a>
  );
};
