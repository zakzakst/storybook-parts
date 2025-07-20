import clsx from "clsx";

import styles from "./styles.module.css";

type OwnProps = {
  shoulder: string;
  text: string;
};

type Props = Omit<React.ComponentProps<"hgroup">, "children"> & OwnProps;

export const Heading01 = ({ className, shoulder, text, ...rest }: Props) => {
  return (
    <hgroup className={clsx(styles.module, className)} {...rest}>
      <p className={styles.shoulder}>{shoulder}</p>
      <h3 className={styles.heading}>{text}</h3>
    </hgroup>
  );
};
