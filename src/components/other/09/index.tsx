import { useState, useEffect } from "react";

import clsx from "clsx";

import styles from "./styles.module.css";

type OwnProps = {
  text: string;
};

type Props = Omit<React.ComponentProps<"div">, "children"> & OwnProps;

const ShowTextTime = 3000;

export const Other09 = ({ className, text, ...rest }: Props) => {
  const [isShowText, setIsShowText] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsShowText(false);
    }, ShowTextTime);
  }, []);

  return (
    <div
      className={clsx(
        styles.module,
        isShowText && styles.isShowText,
        className
      )}
      {...rest}
    >
      <i className={styles.icon}>▶</i>
      {text}
    </div>
  );
};
