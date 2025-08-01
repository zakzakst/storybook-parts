import clsx from "clsx";

import styles from "./styles.module.css";

type OwnProps = {
  mainImg: string;
  href: string;
  date: string;
  thumbnail: string;
  text: string;
};

type Props = Omit<React.ComponentProps<"div">, "children"> & OwnProps;

export const Other07 = ({
  className,
  mainImg,
  href,
  date,
  thumbnail,
  text,
  ...rest
}: Props) => {
  return (
    <div className={styles.container}>
      <div className={clsx(styles.module, className)} {...rest}>
        <img src={mainImg} alt="" />
      </div>
      <a className={styles.link} href={href}>
        <p className={styles.date}>{date}</p>
        <div className={styles.thumbnail}>
          <img src={thumbnail} alt="" />
        </div>
        <p className={styles.text}>{text}</p>
      </a>
    </div>
  );
};
