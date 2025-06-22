import clsx from "clsx";
import { FaAngleRight } from "react-icons/fa6";
import styles from './styles.module.css'

type Props = React.ComponentProps<'a'>

export const Button03 = ({className, children, ...rest}: Props) => {
  return (
    <a className={clsx(styles.button, className)} {...rest}><span className={styles.text}>{children}<span className={styles.arrow}><FaAngleRight /></span></span></a>
  )
}