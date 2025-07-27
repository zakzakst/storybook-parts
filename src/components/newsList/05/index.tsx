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

type Props = Omit<React.ComponentProps<"div">, "children"> & OwnProps;

export const NewsList05 = ({ className, links, ...rest }: Props) => {
  return (
    <div className={clsx(styles.module, className)} {...rest}>
      <h3 className={styles.heading}>TOPICS</h3>
      <ul className={styles.list}>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} className={styles.link}>
              <span className={styles.date}>{link.date}</span>
              <span className={styles.text}>{link.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
