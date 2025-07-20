import clsx from "clsx";

import styles from "./styles.module.css";

type OwnProps = {
  heading: string;
  headingEn: string;
};

type Props = Omit<React.ComponentProps<"hgroup">, "children"> & OwnProps;

export const Heading10 = ({
  className,
  heading,
  headingEn,
  ...rest
}: Props) => {
  return (
    <hgroup className={clsx(styles.module, className)} {...rest}>
      <h3 className={styles.heading}>
        <span className={styles.ja}>
          <span>{heading}</span>
          <span className={styles.jaLine}>
            <span />
          </span>
        </span>
        <span>{headingEn}</span>
      </h3>
    </hgroup>
  );
};
