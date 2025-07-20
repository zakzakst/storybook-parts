import clsx from "clsx";

import styles from "./styles.module.css";

type OwnProps = {
  text: string;
};

type Props = Omit<React.ComponentProps<"h3">, "children"> & OwnProps;

export const Heading05 = ({ className, text, ...rest }: Props) => {
  // TODO: spanで分割すると読み上げツールを利用した際に不自然になる？確認して必要であれば対応（role=presentation, aria-labelとか使う？）
  return (
    <h3 className={clsx(styles.module, className)} {...rest}>
      <span className={styles.shoulder}>
        <span data-char-variant="primary">H</span>eading{" "}
        <span data-char-variant="secondary">0</span>5
      </span>
      {text}
    </h3>
  );
};
