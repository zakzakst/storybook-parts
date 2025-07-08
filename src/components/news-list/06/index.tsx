import clsx from "clsx";
import styles from "./styles.module.css";

type Link = {
  href: string;
  date: string;
  text: string;
};

type OwnProps = {
  links: Link[];
};

type Props = Omit<React.ComponentProps<"ul">, "children"> & OwnProps;

export const NewsList06 = ({ className, links, ...rest }: Props) => {
  return (
    <ul className={clsx(styles.module, className)} {...rest}>
      {links.map((link, index) => (
        <li key={index} className={styles.item}>
          <a href={link.href} className={styles.link}>
            <span className={styles.date}>{link.date}</span>
            <span className={styles.text}>{link.text}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};
