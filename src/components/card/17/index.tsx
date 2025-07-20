import clsx from "clsx";

import styles from "./styles.module.css";

type OwnProps = {
  thumbnail: string;
  date: string;
  heading: string;
  categories: string[];
  link: string;
};

type Props = Omit<React.ComponentProps<"div">, "children"> & OwnProps;

export const Card17 = ({
  className,
  thumbnail,
  date,
  heading,
  categories,
  link,
  ...rest
}: Props) => {
  return (
    <div className={clsx(styles.card, className)} {...rest}>
      <div className={styles.thumbnail}>
        <img src={thumbnail} alt="" />
      </div>
      <div className={styles.content}>
        <div className={styles.body}>
          <p className={styles.date}>{date}</p>
          <h3 className={styles.heading}>{heading}</h3>
        </div>
        <div className={styles.foot}>
          <div className={styles.tags}>
            {categories.map((category, index) => (
              <span key={index} className={styles.tag}>
                {category}
              </span>
            ))}
          </div>
          <a className={styles.link} href={link}>
            <span>VIEW MORE</span>
          </a>
        </div>
      </div>
    </div>
  );
};
