import clsx from "clsx";
import styles from "./styles.module.css";

type OwnProps = {
  thumbnail: string;
  textEn: string;
  textJa: string;
};

type Props = Omit<React.ComponentProps<"a">, "children"> & OwnProps;

export const Card01 = ({
  thumbnail,
  textEn,
  textJa,
  className,
  ...rest
}: Props) => {
  return (
    <a className={clsx(styles.card, className)} {...rest}>
      <div
        className={styles.thumbnail}
        style={{ backgroundImage: `url(${thumbnail})` }}
      />
      <p className={styles.text}>
        <span className={styles.textEn}>{textEn}</span>
        <span className={styles.textJa}>{textJa}</span>
      </p>
    </a>
  );
};
