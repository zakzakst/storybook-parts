import clsx from "clsx";

import styles from "./styles.module.css";

type OwnProps = {
  img: string;
};

type Props = Omit<React.ComponentProps<"div">, "children"> & OwnProps;

export const Other01 = ({ className, img, ...rest }: Props) => {
  return (
    <div>
      <div
        className={clsx(styles.module, className)}
        style={{ backgroundImage: `url(${img})` }}
        {...rest}
      />
      <div className={styles.cover} />
    </div>
  );
};
