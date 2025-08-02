import clsx from "clsx";

import styles from "./styles.module.css";

type OwnProps = {
  href: string;
  textEn: string;
  textJa: string;
  thumbnail: string;
};

type Props = Omit<React.ComponentProps<"div">, "children"> & OwnProps;

export const Other13 = ({
  className,
  href,
  textEn,
  textJa,
  thumbnail,
  ...rest
}: Props) => {
  return (
    <div className={clsx(styles.module, className)} {...rest}>
      <div className={styles.inner}>
        <a className={styles.link} href={href}>
          <div className={styles.textEn}>{textEn}</div>
          <div className={styles.textJa}>{textJa}</div>
          <div className={styles.textLink}>VIEW DETAIL</div>
        </a>
        <div className={styles.line}>
          <ul className={styles.lineItems}>
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <li key={index} className={styles.lineItem}>
                  <div className={styles.lineText}>{textEn}</div>
                  <div className={styles.lineThumbnail}>
                    <img src={thumbnail} />
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
