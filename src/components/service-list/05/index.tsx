import clsx from "clsx";
import { FaAngleRight } from "react-icons/fa6";
import styles from "./styles.module.css";

type Item = {
  link: string;
  thumbnail: string;
  heading: string;
  text: string;
};

type OwnProps = {
  items: Item[];
};

type Props = Omit<React.ComponentProps<"ul">, "children"> & OwnProps;

export const ServiceList05 = ({ className, items, ...rest }: Props) => {
  return (
    <ul className={clsx(styles.module, className)} {...rest}>
      {items.map((item, index) => (
        <li key={index}>
          <a className={styles.link} href={item.link}>
            <div className={styles.content}>
              <div className={styles.thumbnail}>
                <img src={item.thumbnail} alt="" />
              </div>
              <h3 className={styles.heading}>{item.heading}</h3>
              <p className={styles.text}>{item.text}</p>
            </div>
            <div className={styles.arrow}>
              <FaAngleRight className={styles.arrowIcon} />
              {/* <i class="fas fa-long-arrow-alt-right"></i> */}
            </div>
            <div className={styles.bg} />
          </a>
        </li>
      ))}
    </ul>
  );
};
