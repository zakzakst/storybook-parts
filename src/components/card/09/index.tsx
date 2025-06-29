import clsx from "clsx";
import styles from "./styles.module.css";

type OwnProps = {
  tag: string;
  thumbnail: string;
  heading: string;
  content: React.ReactNode;
};

type Props = Omit<React.ComponentProps<"a">, "children"> & OwnProps;

export const Card09 = ({
  className,
  tag,
  thumbnail,
  heading,
  content,
  ...rest
}: Props) => {
  return (
    <a className={clsx(styles.card, className)} {...rest}>
      <div>
        <div className={styles.tag}>{tag}</div>
        <div className={styles.thumbnail}>
          <img src={thumbnail} alt="" />
        </div>
      </div>
      <div className={styles.body}>
        <h3 className={styles.heading}>{heading}</h3>
        <div className={styles.content}>{content}</div>
      </div>
    </a>
  );
};
