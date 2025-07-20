import clsx from "clsx";

import styles from "./styles.module.css";

type Props = React.ComponentProps<"a">;

export const Button31 = ({ className, children, ...rest }: Props) => {
  return (
    <a className={clsx(styles.button, className)} {...rest}>
      <span className={styles.text}>{children}</span>
      <svg className={styles.icon} width="88" height="88" viewBox="0 0 88 88">
        <path
          className={styles.arrow}
          d="M43.29,37.61l-.22.22a.38.38,0,0,0,0,.54l5.6,5.6H36.87a.38.38,0,0,0-.37.37v.32a.38.38,0,0,0,.38.37h11.8l-5.6,5.6a.37.37,0,0,0,0,.53l.22.23a.37.37,0,0,0,.53,0l6.63-6.62a.4.4,0,0,0,0-.54l-6.63-6.62a.38.38,0,0,0-.53,0Z"
        ></path>
        <path
          className={styles.circle}
          d="M44,.5A43.5,43.5,0,0,0,8.93,69.73l.35-.38a42.93,42.93,0,1,1,14.31,12.5l-.35.39A43.51,43.51,0,1,0,44,.5Z"
        ></path>
      </svg>
    </a>
  );
};
