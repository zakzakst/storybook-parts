import clsx from "clsx";
import styles from "./styles.module.css";

type OwnProps = {
  thumbnail: string;
  heading: string;
  category: string;
  date: string;
};

type Props = Omit<React.ComponentProps<"a">, "children"> & OwnProps;

export const Card15 = ({
  className,
  thumbnail,
  heading,
  category,
  date,
  ...rest
}: Props) => {
  return (
    <a className={clsx(styles.card, className)} {...rest}>
      <div className={styles.thumbnail}>
        <img src={thumbnail} alt="" />
        <span className={styles.thumbnailBorder} />
        <span className={styles.thumbnailBorder} />
      </div>
      <div className={styles.body}>
        <h3 className={styles.heading}>{heading}</h3>
        <p className={styles.info}>
          <span className={styles.category}>{category}</span>
          <span className={styles.date}>{date}</span>
        </p>
      </div>
    </a>
  );
};
