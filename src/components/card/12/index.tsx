import {useState, useRef} from 'react'

import clsx from "clsx";

import styles from "./styles.module.css";

type Item = {
  href: string;
  thumbnail: string;
  category: string;
  text: string;
  date: string;
}

const Card12Item = (item: Item) => {
  const [circlePos, setCirclePos] = useState<{x: number; y: number}>({x: 0, y: 0})
  const itemRef = useRef<HTMLAnchorElement | null>(null)

  const updateCirclePos = (e: React.MouseEvent) => {
    if (!itemRef.current) return
    const clientRect = itemRef.current.getBoundingClientRect()
    const pointerX = e.pageX - (clientRect.left + window.pageXOffset);
    const pointerY = e.pageY - (clientRect.top + window.pageYOffset);
    const x = pointerX < 0 ? 0 : pointerX > itemRef.current.clientWidth ? itemRef.current.clientWidth : pointerX
    const y = pointerY < 0 ? 0 : pointerY > itemRef.current.clientHeight ? itemRef.current.clientHeight : pointerY
    setCirclePos({x, y})
  }

  const onMouseEnter = (e: React.MouseEvent) => {
    updateCirclePos(e)
  }

  const onMouseLeave = (e: React.MouseEvent) => {
    updateCirclePos(e)
  }

  return (
    <li>
      <a
        className={styles.item}
        href={item.href}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={itemRef}
      >
        <div className={styles.circle} style={{left: `${circlePos.x}px`, top: `${circlePos.y}px`}} />
        <div className={styles.thumbnail}><img src={item.thumbnail} /></div>
        <p className={styles.category}>{item.category}</p>
        <p className={styles.text}>{item.text}</p>
        <p className={styles.date}>{item.date}</p>
      </a>
    </li>
  )
}

type OwnProps = {
  items: Item[];
};

type Props = Omit<React.ComponentProps<"ul">, "children"> & OwnProps;

export const Card12 = ({ className, items, ...rest }: Props) => {
  return (
    <ul className={clsx(styles.module, className)} {...rest}>
      {items.map((item, index) => (
        <Card12Item key={index} {...item} />
      ))}
    </ul>
  )
}