import clsx from "clsx";

import styles from "./styles.module.css";

type OwnProps = {
  heading: string;
  description: string;
};

type Props = Omit<React.ComponentProps<"hgroup">, "children"> & OwnProps;

export const Heading03 = ({
  className,
  heading,
  description,
  ...rest
}: Props) => {
  return (
    <hgroup className={clsx(styles.module, className)} {...rest}>
      <h3 className={styles.heading}>{heading}</h3>
      <p className={styles.description}>{description}</p>
    </hgroup>
  );
};
