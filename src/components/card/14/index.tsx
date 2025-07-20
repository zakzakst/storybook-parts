import clsx from "clsx";

import styles from "./styles.module.css";

type OwnProps = {
  thumbnail: string;
  tag: string;
  heading: string;
  content: React.ReactNode;
};

type Props = Omit<React.ComponentProps<"a">, "children"> & OwnProps;

export const Card14 = ({
  className,
  thumbnail,
  tag,
  heading,
  content,
  ...rest
}: Props) => {
  return (
    <a className={clsx(styles.card, className)} {...rest}>
      <div className={styles.thumbnail}>
        <img src={thumbnail} alt="" />
      </div>
      <h3 className={styles.tag}>{tag}</h3>
      <h3 className={styles.heading}>{heading}</h3>
      <div className={styles.content}>{content}</div>
      <div className={styles.button}>VIEW MORE</div>
    </a>
  );
};
