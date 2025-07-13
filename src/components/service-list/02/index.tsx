import clsx from "clsx";
import styles from "./styles.module.css";

type Item = {
  href: string;
  icon: string;
  text: string;
};

type OwnProps = {
  items: Item[];
};

type Props = Omit<React.ComponentProps<"ul">, "children"> & OwnProps;

export const ServiceList02 = ({ className, items, ...rest }: Props) => {
  return (
    <ul className={clsx(styles.module, className)} {...rest}>
      {items.map((item, index) => (
        <li key={index}>
          <a className={styles.link} href={item.href}>
            <div className={styles.icon}>
              <img src={item.icon} alt="" />
            </div>
            <p className={styles.text}>{item.text}</p>
          </a>
        </li>
      ))}
    </ul>
  );
};
