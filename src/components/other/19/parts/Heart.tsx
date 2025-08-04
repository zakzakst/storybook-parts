import { useState } from "react";

import clsx from "clsx";

import styles from "./icon.module.css";

type Props = Omit<React.ComponentProps<"div">, "children" | "onClick">;

export const Heart = ({ className, ...rest }: Props) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div
      className={clsx(styles.module, className)}
      aria-checked={isChecked}
      onClick={() => setIsChecked(!isChecked)}
      {...rest}
    >
      <div className={styles.icon}>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M384,46.469c-70.688,0-128,57.313-128,128.016c0-70.703-57.313-128.016-128-128.016S0,103.781,0,174.484 c0,66.484,31.313,193.391,218.563,276.234c11.844,5.25,35.703,14.469,35.703,14.469c0.547,0.219,1.141,0.344,1.734,0.344 s1.188-0.125,1.734-0.344c0,0,23.859-9.219,35.703-14.469C480.688,367.875,512,240.969,512,174.484 C512,103.781,454.688,46.469,384,46.469z" />
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
