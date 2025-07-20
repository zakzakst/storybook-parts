import clsx from "clsx";

import styles from "./styles.module.css";

type Link = {
  href: string;
  date: string;
  category: string;
  text: string;
};

type OwnProps = {
  links: Link[];
};

type Props = Omit<React.ComponentProps<"ul">, "children"> & OwnProps;

export const NewsList04 = ({ className, links, ...rest }: Props) => {
  return (
    <ul className={clsx(styles.module, className)} {...rest}>
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.href} className={styles.link}>
            <span className={styles.date}>{link.date}</span>
            <span className={styles.category}>{link.category}</span>
            <span className={styles.text}>{link.text}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};
