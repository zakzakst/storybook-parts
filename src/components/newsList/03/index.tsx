import clsx from "clsx";

import styles from "./styles.module.css";

type Link = {
  href: string;
  category: string;
  date: string;
  week: string;
  text: string;
};

type OwnProps = {
  links: Link[];
};

type Props = Omit<React.ComponentProps<"ul">, "children"> & OwnProps;

export const NewsList03 = ({ className, links, ...rest }: Props) => {
  return (
    <ul className={clsx(styles.module, className)} {...rest}>
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.href} className={styles.link}>
            <span className={styles.linkInfo}>
              <span className={styles.linkCategory}>{link.category}</span>
              <span className={styles.linkDate}>{link.date}</span>
              <span className={styles.linkWeek}>[{link.week}]</span>
            </span>
            <span className={styles.linkText}>{link.text}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};
