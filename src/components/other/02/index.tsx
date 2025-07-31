import clsx from "clsx";

import styles from "./styles.module.css";

type OwnProps = {
  subText: string;
  text: string;
};

type Props = Omit<React.ComponentProps<"a">, "children"> & OwnProps;

export const Other02 = ({ className, subText, text, ...rest }: Props) => {
  return (
    <a className={clsx(styles.module, className)} {...rest}>
      <span className={styles.subText}>{subText}</span>
      <span className={styles.text}>{text}</span>
    </a>
  );
};
