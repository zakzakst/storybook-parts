import { useId, useState } from "react";

import clsx from "clsx";

import styles from "./styles.module.css";

type Props = Omit<React.ComponentProps<"div">, "children">;

const items: string[] = [
  "https://picsum.photos/id/237/1700/900",
  "https://picsum.photos/id/247/1700/900",
  "https://picsum.photos/id/239/1700/900",
  "https://picsum.photos/id/248/1700/900",
  "https://picsum.photos/id/249/1700/900",
  "https://picsum.photos/id/242/1700/900",
  "https://picsum.photos/id/243/1700/900",
  "https://picsum.photos/id/244/1700/900",
];

export const Other17 = ({ className, ...rest }: Props) => {
  const [isHover, setIsHover] = useState(false);
  const [bgImg, setBgImg] = useState("");
  const maskId = useId();

  const onMouseEnter = (item: string) => {
    setIsHover(true);
    setBgImg(item);
  };

  const onMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div
      className={clsx(styles.module, isHover && styles.isHover, className)}
      {...rest}
    >
      <svg
        className={styles.svg}
        viewBox="0 0 1600 900"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <mask className={styles.svgMask} id={maskId}>
            <path d="M0,0 L320,0 L320,320 L0,320Z" />
            <path d="M400,80 L720,80 L720,400 L400,400Z" />
            <path d="M800,0 L1200,0 L1200,240 L800,240Z" />
            <path d="M1280,0 L1600,0 L1600,320 L1280,320Z" />
            <path d="M0,400 L240,400 L240,900 L0,900Z" />
            <path d="M320,480 L720,480 L720,900 L320,900Z" />
            <path d="M800,320 L1120,320 L1120,840 L800,840Z" />
            <path d="M1200,400 L1600,400 L1600,900 L1200,900Z" />
          </mask>
        </defs>
        <foreignObject
          className={styles.content}
          mask={`url(#${maskId})`}
          width="1600"
          height="900"
        >
          <div
            className={styles.bg}
            style={bgImg ? { backgroundImage: `url(${bgImg})` } : undefined}
          />
        </foreignObject>
      </svg>
      <ul className={styles.items}>
        {items.map((item, index) => (
          <li
            key={index}
            className={styles.item}
            data-item-num={index + 1}
            onMouseEnter={() => onMouseEnter(item)}
            onMouseLeave={onMouseLeave}
          >
            <a className={styles.itemLink} href="#">
              <img src={item} alt="" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
