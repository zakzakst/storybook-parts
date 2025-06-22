import clsx from "clsx";
import { FaArrowRight } from "react-icons/fa6";
import styles from './styles.module.css'

type Props = React.ComponentProps<'a'>

export const Button01 = ({className, ...rest}: Props) => {
  return (
    <a className={clsx(styles.button, className)} {...rest}><span className={styles.text}>ボタン01</span><span className={styles.arrow}><FaArrowRight /></span></a>
  )
}

