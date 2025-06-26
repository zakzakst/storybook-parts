import clsx from "clsx";
import styles from "./styles.module.css";

type OwnProps = {
  text: string;
};

type Props = Omit<React.ComponentProps<"a">, "children"> & OwnProps;

export const Button11 = ({ text, className, ...rest }: Props) => {
  // TODO: spanで分割すると読み上げツールを利用した際に不自然になる？確認して必要であれば対応（role=presentation, aria-labelとか使う？）
  return (
    <a className={clsx(styles.button, className)} {...rest}>
      {text.split("").map((c, index) => (
        <span
          key={index}
          className={styles.char}
          style={{ ["--char-num" as string]: index }}
        >
          <span>{c}</span>
          <span>{c}</span>
        </span>
      ))}
    </a>
  );
};
