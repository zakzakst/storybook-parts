import clsx from "clsx";
import styles from "./styles.module.css";

type OwnProps = {
  text: string;
  hoverText: string;
};

type Props = Omit<React.ComponentProps<"a">, "children"> & OwnProps;

export const Button09 = ({ text, hoverText, className, ...rest }: Props) => {
  // TODO: spanで分割すると読み上げツールを利用した際に不自然になる？確認して必要であれば対応（role=presentation, aria-labelとか使う？）
  return (
    <a className={clsx(styles.button, className)} {...rest}>
      <span className={styles.text}>
        {text.split("").map((c, index) => (
          <span key={index} style={{ ["--char-num" as string]: index }}>
            {c}
          </span>
        ))}
      </span>
      <span className={styles.hoverText}>
        {hoverText.split("").map((c, index) => (
          <span key={index} style={{ ["--char-num" as string]: index }}>
            {c}
          </span>
        ))}
      </span>
      <span className={styles.arrow} />
    </a>
  );
};
