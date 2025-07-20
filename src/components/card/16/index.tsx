import clsx from "clsx";

import styles from "./styles.module.css";

type OwnProps = {
  thumbnail: string;
  content: React.ReactNode;
  date: string;
};

type Props = Omit<React.ComponentProps<"a">, "children"> & OwnProps;

export const Card16 = ({
  className,
  thumbnail,
  content,
  date,
  ...rest
}: Props) => {
  return (
    <a className={clsx(styles.card, className)} {...rest}>
      <div className={styles.thumbnail}>
        <img src={thumbnail} alt="" />
        <div className={styles.thumbnailMask}>
          <svg viewBox="0 0 160 250">
            <path d="M160,9.09494702e-13 L160,250 C83.8467314,250 30.5133981,250 0,250 C62.0781553,234.015625 80,103.660156 105.673828,55.0234375 C122.789714,22.5989583 140.898438,4.2578125 160,9.09494702e-13 Z" />
          </svg>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.content}>{content}</div>
        <p className={styles.date}>{date}</p>
      </div>
    </a>
  );
};
