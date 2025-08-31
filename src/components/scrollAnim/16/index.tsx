// https://zakzakst.github.io/parts/components/detail/scroll-anim17.html
import clsx from "clsx";

import styles from "./styles.module.css";

type OwnProps = {
  text: string;
};

type Props = Omit<React.ComponentProps<"div">, "children"> & OwnProps;

export const ScrollAnim16 = ({ className, text, ...rest }: Props) => {
  return (
    <div className={clsx(styles.module, className)} {...rest}>
      {text}
    </div>
  );
};
