import clsx from "clsx";
import styles from "./styles.module.css";

type OwnProps = {
  shoulder: string;
  text: string;
};

type Props = Omit<React.ComponentProps<"h3">, "children"> & OwnProps;

export const Heading02 = ({ className, shoulder, text, ...rest }: Props) => {
  return (
    <h3 className={clsx(styles.module, className)} {...rest}>
      {shoulder}
      <span>{text}</span>
    </h3>
  );
};
