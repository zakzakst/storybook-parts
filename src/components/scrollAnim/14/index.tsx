import clsx from "clsx";

import styles from "./styles.module.css";

type OwnProps = {
  thumbnail: string;
};

type Props = Omit<React.ComponentProps<"div">, "children"> & OwnProps;

const OffsetBg = 72;

export const ScrollAnim14 = ({ className, thumbnail, ...rest }: Props) => {
  return (
    <div
      className={clsx("animejs", styles.module, className)}
      {...rest}
      style={{ ["--offset-bg" as string]: `-${OffsetBg}px` }}
    >
      <div className={styles.imgWrapper}>
        <div className={styles.img}>
          <img src={thumbnail} />
        </div>
      </div>
    </div>
  );
};
