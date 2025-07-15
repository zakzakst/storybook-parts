import clsx from "clsx";
import styles from "./styles.module.css";

type Item = {
  num: string;
  thumbnail: string;
  heading: string;
  subHeading: string;
  text: string;
  link: string;
};

type OwnProps = {
  items: Item[];
};

type Props = Omit<React.ComponentProps<"ul">, "children"> & OwnProps;

export const ServiceList06 = ({ className, items, ...rest }: Props) => {
  return (
    <ul className={clsx(styles.module, className)} {...rest}>
      {items.map((item, index) => (
        <li key={index} className={styles.item}>
          <div className={styles.num}>{item.num}</div>
          <div className={styles.thumbnail}>
            <img src={item.thumbnail} alt="" />
          </div>
          <div className={styles.content}>
            <h3 className={styles.heading}>{item.heading}</h3>
            <p className={styles.subHeading}>{item.subHeading}</p>
            <p className={styles.text}>{item.text}</p>
            <div className={styles.linkContainer}>
              <a className={styles.link} href={item.link}>
                Read more
              </a>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
