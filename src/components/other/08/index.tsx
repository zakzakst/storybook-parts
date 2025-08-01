import clsx from "clsx";

import styles from "./styles.module.css";

type OwnProps = {
  text: string;
};

type Props = Omit<React.ComponentProps<"div">, "children"> & OwnProps;

export const Other08 = ({ className, ...rest }: Props) => {
  return <div className={clsx(styles.module, className)} {...rest} />;
};
