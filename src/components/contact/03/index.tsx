import clsx from "clsx";

import styles from "./styles.module.css";

type Props = Omit<React.ComponentProps<"a">, "children">;

export const Contact03 = ({ className, ...rest }: Props) => {
  return (
    <a className={clsx(styles.module, className)} {...rest}>
      <h3 className={styles.heading}>
        <span className={styles.headingEn}>CONTACT</span>お問い合わせ
      </h3>
      <p className={styles.text}>
        テキストが入ります。テキストが入ります。テキストが入ります。
      </p>
      <p className={styles.button}>
        <span>お問い合わせフォーム</span>
        <i className={styles.buttonIcon} />
      </p>
    </a>
  );
};
