import clsx from "clsx";
import styles from "./styles.module.css";

type OwnProps = {
  thumbnail: string;
};

type Props = Omit<React.ComponentProps<"a">, "children"> & OwnProps;

export const Card05 = ({ className, thumbnail, ...rest }: Props) => {
  return (
    <a className={clsx(styles.card, className)} {...rest}>
      <img src={thumbnail} width="400" height="200" alt="" />
    </a>
  );
};
