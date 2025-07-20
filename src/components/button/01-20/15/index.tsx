import clsx from "clsx";

import styles from "./styles.module.css";

type Props = React.ComponentProps<"a">;

export const Button15 = ({ className, ...rest }: Props) => {
  return <a className={clsx(styles.button, className)} {...rest} />;
};
