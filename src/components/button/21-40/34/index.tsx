import clsx from "clsx";

import styles from "./styles.module.css";

type Props = Omit<React.ComponentProps<"button">, "children">;

// TODO: aria-labelが設定されていない場合のデフォルト値設定する
export const Button34 = ({ className, ...rest }: Props) => {
  return (
    <button className={clsx(styles.button, className)} {...rest}>
      <span className={styles.arrow} />
      <svg className={styles.circle} viewBox="0 0 38 38">
        <path d="M 0,19 A 19,19 0 1,1 38,19 A 19,19 0 1,1 0,19 z"></path>
      </svg>
    </button>
  );
};
