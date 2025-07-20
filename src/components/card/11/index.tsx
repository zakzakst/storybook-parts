import clsx from "clsx";

import styles from "./styles.module.css";

type OwnProps = {
  heading: string;
  thumbnail: string;
  content: React.ReactNode;
  date: string;
};

type Props = Omit<React.ComponentProps<"a">, "children"> & OwnProps;

export const Card11 = ({
  className,
  heading,
  thumbnail,
  content,
  date,
  ...rest
}: Props) => {
  return (
    <a className={clsx(styles.card, className)} {...rest}>
      <h3 className={styles.heading}>{heading}</h3>
      <div className={styles.thumbnail}>
        <img src={thumbnail} alt="" />
      </div>
      <div className={styles.content}>{content}</div>
      <p className={styles.date}>{date}</p>
    </a>
  );
};
