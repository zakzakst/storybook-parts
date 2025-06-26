import clsx from "clsx";
import styles from "./styles.module.css";

type Props = React.ComponentProps<"button">;

export const Button19 = ({ className, ...rest }: Props) => {
  return <button className={clsx(styles.button, className)} {...rest} />;
};
