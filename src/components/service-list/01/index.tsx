import clsx from "clsx";
import styles from "./styles.module.css";

type Item = {
  href: string;
  icon: string;
  textJa: string;
  textEn: string;
};

type OwnProps = {
  items: Item[];
};

type Props = Omit<React.ComponentProps<"ul">, "children"> & OwnProps;

export const ServiceList01 = ({ className, items, ...rest }: Props) => {
  return (
    <ul className={clsx(styles.module, className)} {...rest}>
      {items.map((item, index) => (
        <li key={index}>
          <a className={styles.link} href={item.href}>
            <img src={item.icon} alt="" />
          </a>
          <p className={styles.text}>
            <span className={styles.textEn}>{item.textEn}</span>
            <span className={styles.textJa}>{item.textJa}</span>
          </p>
        </li>
      ))}
    </ul>
  );
};
