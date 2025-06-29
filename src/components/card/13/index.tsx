import clsx from "clsx";
import styles from "./styles.module.css";

type OwnProps = {
  thumbnail: string;
};

type Props = Omit<React.ComponentProps<"div">, "children"> & OwnProps;

export const Card13 = ({ className, thumbnail, ...rest }: Props) => {
  return (
    <div className={clsx(styles.card, className)} {...rest}>
      <div className={styles.thumbnail}>
        <img src={thumbnail} alt="" />
      </div>
    </div>
  );
};
