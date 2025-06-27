import clsx from "clsx";
import styles from "./styles.module.css";

type OwnProps = {
  thumbnail: string;
  date: string;
  heading: string;
};

type Props = Omit<React.ComponentProps<"a">, "children"> & OwnProps;

export const Card07 = ({
  className,
  thumbnail,
  date,
  heading,
  ...rest
}: Props) => {
  return (
    <a className={clsx(styles.card, className)} {...rest}>
      <div className={styles.thumbnail}>
        <img src={thumbnail} alt="" />
      </div>
      <div className={styles.body}>
        <p className={styles.date}>{date}</p>
        <h3 className={styles.heading}>{heading}</h3>
        <svg
          className={styles.arrow}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.95 4.93"
        >
          <path d="M0 4.43h20.17" />
          <path d="M14.63 0v4.88h7.32L14.63 0z" />
        </svg>
      </div>
    </a>
  );
};
