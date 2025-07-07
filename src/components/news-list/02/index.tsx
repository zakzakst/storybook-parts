import clsx from "clsx";
import styles from "./styles.module.css";

type Link = {
  href: string;
  category: string;
  date: string;
  text: string;
};

type OwnProps = {
  links: Link[];
};

type Props = Omit<React.ComponentProps<"ul">, "children"> & OwnProps;

export const NewsList02 = ({ className, links, ...rest }: Props) => {
  return (
    <ul className={clsx(styles.module, className)} {...rest}>
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.href} className={styles.link}>
            <dl className={styles.linkInner}>
              <dt className={styles.linkInfo}>
                {link.category}
                <span>{link.date}</span>
              </dt>
              <dd className={styles.linkText}>
                テキストが入ります。テキストが入ります。テキストが入ります。
              </dd>
            </dl>
          </a>
        </li>
      ))}
    </ul>
  );
};
