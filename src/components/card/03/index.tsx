import clsx from "clsx";
import styles from "./styles.module.css";

type Link = {
  href: string;
  text: string;
  target?: React.ComponentProps<"a">["target"];
};

type OwnProps = {
  thumbnail: string;
  heading: string;
  content: React.ReactNode;
  links: Link[];
};

type Props = Omit<React.ComponentProps<"div">, "children"> & OwnProps;

export const Card03 = ({
  className,
  thumbnail,
  heading,
  content,
  links,
  ...rest
}: Props) => {
  return (
    <div className={clsx(styles.card, className)} {...rest}>
      <div className={styles.body}>
        <div className={styles.thumbnail}>
          <img src={thumbnail} width="200" height="200" alt="" />
        </div>
        <p className={styles.heading}>{heading}</p>
        <div className={styles.content}>{content}</div>
      </div>
      <div className={styles.foot}>
        <div className={styles.links}>
          {links.map((link, index) => (
            <a
              key={index}
              className={styles.link}
              href={link.href}
              target={link.target}
            >
              <span>{link.text}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
