import clsx from "clsx";

import styles from "./styles.module.css";

type OwnProps = {
  thumbnail: string;
  heading: string;
  content: React.ReactNode;
};

type Props = Omit<React.ComponentProps<"a">, "children"> & OwnProps;

export const Card10 = ({
  className,
  thumbnail,
  heading,
  content,
  ...rest
}: Props) => {
  return (
    <a className={clsx(styles.card, className)} {...rest}>
      <div className={styles.thumbnail}>
        <img src={thumbnail} alt="" />
      </div>
      <div className={styles.body}>
        <h3 className={styles.heading}>{heading}</h3>
        <p className={styles.content}>{content}</p>
        <div className={styles.border}>
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </a>
  );
};
