import clsx from "clsx";

import styles from "./styles.module.css";

type OwnProps = {
  heading: string;
  subHeading: string;
  items: string[];
};

type Props = Omit<React.ComponentProps<"div">, "children"> & OwnProps;

export const Other03 = ({
  className,
  heading,
  subHeading,
  items,
  ...rest
}: Props) => {
  return (
    <div className={clsx(styles.module, className)} {...rest}>
      <h2 className={styles.heading}>{heading}</h2>
      <div className={styles.content}>
        <h3 className={styles.subHeading}>{subHeading}</h3>
        <ul className={styles.list}>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
