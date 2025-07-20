import clsx from "clsx";

import styles from "./styles.module.css";

type OwnProps = {
  shoulder: string;
  text: string;
};

type Props = Omit<React.ComponentProps<"h3">, "children"> & OwnProps;

export const Heading04 = ({ className, shoulder, text, ...rest }: Props) => {
  return (
    <h3 className={clsx(styles.module, className)} {...rest}>
      <span>{shoulder}</span>
      {text}
    </h3>
  );
};
