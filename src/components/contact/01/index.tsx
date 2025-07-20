import clsx from "clsx";

import styles from "./styles.module.css";

type Props = Omit<React.ComponentProps<"a">, "children">;

export const Contact01 = ({ className, ...rest }: Props) => {
  return (
    <a className={clsx(styles.module, className)} {...rest}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>CONTACT</h2>
        <p className={styles.text}>ご依頼・お問い合わせはこちら</p>
        <div className={styles.arrow} />
      </div>
    </a>
  );
};
