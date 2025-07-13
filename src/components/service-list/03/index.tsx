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

export const ServiceList03 = ({ className, items, ...rest }: Props) => {
  return (
    <ul className={clsx(styles.module, className)} {...rest}>
      {items.map((item, index) => (
        <li key={index}>
          <a className={styles.link} href={item.href}>
            <div className={styles.icon}>
              <img src={item.icon} alt="" />
            </div>
            <p className={styles.text}>
              <span className={styles.textEn}>{item.textEn}</span>
              <span className={styles.textJa}>{item.textJa}</span>
            </p>
            <div className={styles.arrow}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
};
