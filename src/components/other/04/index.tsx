import clsx from "clsx";

import styles from "./styles.module.css";

type OwnProps = {
  text: React.ReactNode;
};

type Props = Omit<React.ComponentProps<"p">, "children"> & OwnProps;

export const Other04 = ({ className, text, ...rest }: Props) => {
  return (
    <p className={clsx(styles.module, className)} {...rest}>
      {text}
    </p>
  );
};
