import { useId } from "react";

import clsx from "clsx";

import styles from "./styles.module.css";

type OwnProps = {
  img: string;
};

type Props = Omit<React.ComponentProps<"div">, "children"> & OwnProps;

export const Other15 = ({ className, img, ...rest }: Props) => {
  const maskId = useId();

  return (
    <div className={clsx(styles.module, className)} {...rest}>
      <svg
        className={styles.svg}
        viewBox="0 0 800 600"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <mask className={styles.svgMask} id={maskId}>
            <path d="M24.134,271.117L314.506,50.834L788.19,191.784L668.806,578.434L143.517,557.638L24.134,271.117Z" />
            <path d="M84.211,130.167L81.13,533.761L741.977,556.868L755.841,121.694L419.255,46.213L84.211,130.167Z" />
          </mask>
        </defs>
        <g className={styles.svgBase}>
          <path d="M24.134,271.117L314.506,50.834L788.19,191.784L668.806,578.434L143.517,557.638L24.134,271.117Z" />
          <path d="M84.211,130.167L81.13,533.761L741.977,556.868L755.841,121.694L419.255,46.213L84.211,130.167Z" />
        </g>
        <foreignObject
          className={styles.svgImg}
          mask={`url(#${maskId})`}
          width="800"
          height="600"
        >
          <img src={img} alt="" />
        </foreignObject>
      </svg>
      <div className={styles.char}>？</div>
    </div>
  );
};
