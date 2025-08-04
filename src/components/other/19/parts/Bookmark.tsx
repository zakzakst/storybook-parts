import { useState } from "react";

import clsx from "clsx";

import styles from "./icon.module.css";

type Props = Omit<React.ComponentProps<"div">, "children" | "onClick">;

export const Bookmark = ({ className, ...rest }: Props) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div
      className={clsx(styles.module, className)}
      aria-checked={isChecked}
      onClick={() => setIsChecked(!isChecked)}
      style={{
        ["--size" as string]: "20px",
        ["--color-active" as string]: "#00e9c6",
        ["--color-hover" as string]: "#a2fff1",
        ["--color-decoration" as string]: "#71ffea",
      }}
      {...rest}
    >
      <div className={styles.icon}>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M37.246,0v479.924c0,11.47,6.122,22.064,16.052,27.786c9.945,5.732,22.173,5.717,32.103-0.029l138.445-80.198 c19.889-11.514,44.42-11.514,64.309,0l138.453,80.198c9.922,5.746,22.158,5.761,32.088,0.029 c9.938-5.723,16.059-16.316,16.059-27.786V0H37.246z M359.816,208.419l-50.144,41.274c-1.922,1.583-2.762,4.147-2.129,6.564 l16.303,62.858c0.662,2.556-0.303,5.252-2.439,6.8c-2.129,1.554-4.994,1.635-7.219,0.221l-54.733-34.94 c-2.107-1.34-4.803-1.34-6.91,0l-54.74,34.94c-2.218,1.414-5.09,1.333-7.226-0.221c-2.129-1.547-3.094-4.243-2.431-6.8 l16.309-62.858c0.634-2.416-0.206-4.98-2.128-6.564l-50.144-41.274c-2.033-1.68-2.843-4.427-2.025-6.932 c0.818-2.512,3.086-4.265,5.709-4.427l64.824-3.904c2.49-0.155,4.671-1.738,5.584-4.058l23.749-60.442 c0.972-2.453,3.337-4.067,5.974-4.067c2.637,0,5.002,1.62,5.974,4.067l23.742,60.442c0.906,2.32,3.086,3.904,5.583,4.058 l64.824,3.904c2.638,0.162,4.9,1.915,5.717,4.427C362.659,203.992,361.856,206.739,359.816,208.419z" />
        </svg>
      </div>
      <div className={styles.particles}>
        {Array(6)
          .fill(null)
          .map((_, index) => (
            <div key={index} className={styles.particle} />
          ))}
      </div>
    </div>
  );
};
