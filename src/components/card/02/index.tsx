import clsx from "clsx";
import styles from "./styles.module.css";

type OwnProps = {
  tag: string;
  icon: string;
  heading: string;
  content: React.ReactNode;
};

type Props = Omit<React.ComponentProps<"a">, "children"> & OwnProps;

export const Card02 = ({
  className,
  tag,
  icon,
  heading,
  content,
  ...rest
}: Props) => {
  return (
    <a className={clsx(styles.card, className)} {...rest}>
      <p className={styles.tag}>{tag}</p>
      <div className={styles.icon}>
        <img src={icon} width="350" height="350" alt="" />
      </div>
      <h3 className={styles.heading}>{heading}</h3>
      <div className={styles.content}>{content}</div>
      <div className={styles.button} />
    </a>
  );
};
