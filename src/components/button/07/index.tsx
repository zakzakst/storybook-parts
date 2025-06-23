import clsx from "clsx";
import styles from "./styles.module.css";

type Props = React.ComponentProps<"button">;

export const Button07 = ({ className, ...rest }: Props) => {
  return (
    <div className={styles.wrapper}>
      <button className={clsx(styles.button, className)} {...rest} />
    </div>
  );
};
