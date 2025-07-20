import clsx from "clsx";

import styles from "./styles.module.css";

type OwnProps = {
  thumbnail: string;
  heading: string;
  content: React.ReactNode;
};

type Props = Omit<React.ComponentProps<"a">, "children"> & OwnProps;

export const Card04 = ({
  className,
  thumbnail,
  heading,
  content,
  ...rest
}: Props) => {
  return (
    <a className={clsx(styles.card, className)} {...rest}>
      <div className={styles.head}>
        <div className={styles.thumbnail}>
          <img src={thumbnail} width="400" height="200" alt="" />
        </div>
        <h3 className={styles.heading}>{heading}</h3>
      </div>
      <div className={styles.content}>{content}</div>
      <div className={styles.arrow}>
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </a>
  );
};
