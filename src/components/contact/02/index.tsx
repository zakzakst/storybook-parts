import clsx from "clsx";

import styles from "./styles.module.css";

type Link = {
  href: string;
  icon: string;
  text: string;
};

type OwnProps = {
  links: Link[];
};

type Props = Omit<React.ComponentProps<"div">, "children"> & OwnProps;

export const Contact02 = ({ className, links, ...rest }: Props) => {
  return (
    <div className={clsx(styles.module, className)} {...rest}>
      {links.map((link, index) => (
        <a key={index} className={styles.link} href={link.href}>
          <div className={styles.icon}>
            <img src={link.icon} alt="" />
          </div>
          {link.text}
        </a>
      ))}
    </div>
  );
};
