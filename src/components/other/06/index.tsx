import clsx from "clsx";

import styles from "./styles.module.css";

type Item = {
  rank?: number;
  thumbnail: string;
  title: string;
  text: string;
};

type OwnProps = {
  items: Item[];
};

type Props = Omit<React.ComponentProps<"div">, "children"> & OwnProps;

export const Other06 = ({ className, items, ...rest }: Props) => {
  return (
    <div className={clsx(styles.module, className)} {...rest}>
      {items.map((item, index) => (
        <div key={index} className={styles.cardContainer}>
          <div>
            {item.rank && <p className={styles.rank}>人気 No.{item.rank}</p>}
          </div>
          <div className={styles.card}>
            <div className={styles.cardThumbnail}>
              <img src={item.thumbnail} alt="" />
            </div>
            <div className={styles.cardTitle}>{item.title}</div>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
