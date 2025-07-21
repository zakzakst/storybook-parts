import {useState, useRef} from 'react'

import clsx from "clsx";

import styles from "./styles.module.css";

type Props = React.ComponentProps<"button">;

export const Button37 = ({className, children, ...rest}: Props) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [circlePos, setCirclePos] = useState<{x: number; y: number}>({x: 0, y: 0})
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  const updateCirclePos = (e: React.MouseEvent) => {
    if (isClicked || !buttonRef.current) return
    const clientRect = buttonRef.current.getBoundingClientRect()
    const pointerX = e.pageX - (clientRect.left + window.pageXOffset);
    const pointerY = e.pageY - (clientRect.top + window.pageYOffset);
    const x = pointerX < 0 ? 0 : pointerX > buttonRef.current.clientWidth ? buttonRef.current.clientWidth : pointerX
    const y = pointerY < 0 ? 0 : pointerY > buttonRef.current.clientHeight ? buttonRef.current.clientHeight : pointerY
    setCirclePos({x, y})
  }

  const onMouseEnter = (e: React.MouseEvent) => {
    updateCirclePos(e)
    setIsHovered(true)
  }

  const onMouseLeave = (e: React.MouseEvent) => {
    updateCirclePos(e)
    setIsHovered(false)
    setIsClicked(false)
  }

  const onMouseMove = (e: React.MouseEvent) => {
    updateCirclePos(e)
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
      <span className={styles.circle} style={{left: `${circlePos.x}px`, top: `${circlePos.y}px`}} />
    </button>
  )
}