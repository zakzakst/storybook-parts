import clsx from "clsx";

import styles from "./styles.module.css";

type OwnProps = {
  title1: string;
  title2: string;
  subTitle1: string;
  subTitle2: string;
  thumbnail: string;
};

type Props = Omit<React.ComponentProps<"div">, "children"> & OwnProps;

export const Hero01 = ({
  className,
  title1,
  title2,
  subTitle1,
  subTitle2,
  thumbnail,
  ...rest
}: Props) => {
  return (
    <div className={clsx(styles.module, className)} {...rest}>
      <div className={styles.kv}>
        <div className={styles.kvTitle}>
          <span className={styles.kvSubTitle}>
            <span>{subTitle1}</span>
            <span>{subTitle2}</span>
          </span>
          <span className={styles.kvMainTitle}>
            <span>{title1}</span>
            <span>{title2}</span>
          </span>
        </div>
        <div className={styles.kvBg}>
          <img src={thumbnail} />
        </div>
      </div>
      <div className={styles.content}>
        {Array(10)
          .fill(null)
          .map((_, index) => (
            <p key={index}>
              テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
            </p>
          ))}
      </div>
    </div>
  );
};
