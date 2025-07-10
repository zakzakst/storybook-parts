import clsx from "clsx";
import styles from "./styles.module.css";

type Item = {
  href: string;
  date: string;
  text: string;
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
          <a class="service-list-01__icon" href="#">
            <img src="http://placehold.jp/350x350.png?text=ICON" />
          </a>
          <p class="service-list-01__text">
            <span>SERVICE LIST 01</span>サービス一覧01
          </p>
        </li>
      ))}
    </ul>
  );
};
