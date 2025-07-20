import clsx from "clsx";

import styles from "./styles.module.css";

type OwnProps = {
  heading: string;
  thumbnail1: string;
  thumbnail2: string;
  thumbnail3: string;
  subHeading: string;
};

type Props = Omit<React.ComponentProps<"a">, "children"> & OwnProps;

export const Card20 = ({
  className,
  heading,
  thumbnail1,
  thumbnail2,
  thumbnail3,
  subHeading,
  ...rest
}: Props) => {
  return (
    <a className={clsx(styles.card, className)} {...rest}>
      <h2 className={styles.heading}>{heading}</h2>
      <div className={styles.thumbnailContainer}>
        <div className={styles.thumbnail}>
          <img src={thumbnail1} alt="" />
        </div>
        <div className={styles.thumbnail}>
          <img src={thumbnail2} alt="" />
        </div>
        <div className={styles.thumbnail}>
          <img src={thumbnail3} alt="" />
        </div>
      </div>
      <h3 className={styles.subHeading}>{subHeading}</h3>
    </a>
  );
};
