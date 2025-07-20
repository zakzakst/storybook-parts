import clsx from "clsx";

import styles from "./styles.module.css";

type OwnProps = {
  thumbnail: string;
  date: string;
  heading: string;
};

type Props = Omit<React.ComponentProps<"a">, "children"> & OwnProps;

export const Card08 = ({
  className,
  thumbnail,
  date,
  heading,
  ...rest
}: Props) => {
  return (
    <a className={clsx(styles.card, className)} {...rest}>
      <p className={styles.date}>{date}</p>
      <div className={styles.thumbnail}>
        <img src={thumbnail} alt="" />
      </div>
      <h3 className={styles.heading}>{heading}</h3>
      <p className={styles.link}>
        <span>READ</span>
      </p>
    </a>
  );
};
