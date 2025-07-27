import clsx from "clsx";

import styles from "./styles.module.css";

type Item = {
  thumbnail: string;
  num: string;
  headingEn: string;
  headingJa: string;
  text: string;
};

type OwnProps = {
  items: Item[];
};

type Props = Omit<React.ComponentProps<"ul">, "children"> & OwnProps;

export const ServiceList04 = ({ className, items, ...rest }: Props) => {
  return (
    <ul className={clsx(styles.module, className)} {...rest}>
      {items.map((item, index) => (
        <li key={index}>
          <div className={styles.item}>
            <div className={styles.thumbnailContainer}>
              <div className={styles.thumbnail}>
                <img src={item.thumbnail} alt="" />
              </div>
            </div>
            <hgroup className={styles.heading}>
              <div className={styles.headingNum}>{item.num}</div>
              <div className={styles.headingEn}>{item.headingEn}</div>
              <h3 className={styles.headingJa}>{item.headingJa}</h3>
            </hgroup>
            <p className={styles.text}>{item.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
