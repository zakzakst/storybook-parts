// TODO: https://zakzakst.github.io/parts/components/detail/button38.html
import clsx from "clsx";
import {useState, useRef} from 'react'

import styles from "./styles.module.css";

type Props = React.ComponentProps<"button">;

export const Button37 = ({className, children, ...rest}: Props) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  const setCirclePos = (e: React.MouseEvent) => {
    if (isClicked) return
    console.log(e.pageX, e.pageY)
    console.log(buttonRef.current?.getBoundingClientRect())
  }

  const onMouseEnter = (e: React.MouseEvent) => {
    setCirclePos(e)
    setIsHovered(true)
  }

  const onMouseLeave = (e: React.MouseEvent) => {
    setCirclePos(e)
    setIsHovered(false)
    setIsClicked(false)
  }

  const onMouseMove = (e: React.MouseEvent) => {
    setCirclePos(e)
  }

  const onClick = () => {
    setIsClicked(true)
  }

  return (
    <button
      className={clsx(styles.module, className)}
      data-hovered={isHovered}
      data-clicked={isClicked}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
      onClick={onClick}
      ref={buttonRef}
      {...rest}
    >
      <span>{children}</span>
      <span className={styles.circle} />
    </button>
  )
}