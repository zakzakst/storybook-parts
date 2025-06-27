import clsx from "clsx";
import styles from "./styles.module.css";

type OwnProps = {
  thumbnail: string;
  date: string;
  tag: string;
  heading: string;
  content: React.ReactNode;
};

type Props = Omit<React.ComponentProps<"a">, "children"> & OwnProps;

export const Card06 = ({
  className,
  thumbnail,
  date,
  tag,
  heading,
  content,
  ...rest
}: Props) => {
  return (
    <a className={clsx(styles.card, className)} {...rest}>
      <div className={styles.head}>
        <div className={styles.thumbnail}>
          <img src={thumbnail} alt="" />
        </div>
        <p className={styles.date}>{date}</p>
      </div>
      <p className={styles.tag}>{tag}</p>
      <h3 className={styles.heading}>{heading}</h3>
      <div className={styles.content}>{content}</div>
    </a>
  );
};
