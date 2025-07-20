import clsx from "clsx";

import styles from "./styles.module.css";

type OwnProps = {
  heading: string;
};

type Props = Omit<React.ComponentProps<"h3">, "children"> & OwnProps;

export const Heading09 = ({ className, heading, ...rest }: Props) => {
  return (
    <h3 className={clsx(styles.module, className)} {...rest}>
      {heading.split("").map((c, index) => (
        <span key={index} style={{ ["--char-index" as string]: index }}>
          {c}
        </span>
      ))}
    </h3>
  );
};
