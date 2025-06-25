import clsx from "clsx";
import styles from "./styles.module.css";

type Props = Omit<React.ComponentProps<"button">, "children">;

// TODO: aria-labelが設定されていない場合のデフォルト値設定する
export const Button35 = ({ className, ...rest }: Props) => {
  return (
    <button className={clsx(styles.button, className)} {...rest}>
      <span />
      <span />
      <span />
    </button>
  );
};
