import clsx from "clsx";

import styles from "./styles.module.css";

type OwnProps = {
  num: string;
  heading: string;
  headingEn: string;
  thumbnail: string;
};

type Props = Omit<React.ComponentProps<"a">, "children"> & OwnProps;

export const Card18 = ({
  className,
  num,
  heading,
  headingEn,
  thumbnail,
  ...rest
}: Props) => {
  return (
    <a className={clsx(styles.card, className)} {...rest}>
      <div className={styles.content}>
        <div className={styles.num}>{num}</div>
        <div className={styles.heading}>
          <span>{heading}</span>
        </div>
        <div className={styles.headingEn}>
          <span>{headingEn}</span>
        </div>
      </div>
      <div className={styles.thumbnail}>
        <img src={thumbnail} alt="" />
      </div>
    </a>
  );
};
