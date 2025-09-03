// https://zakzakst.github.io/parts/components/detail/scroll-anim18.html
import clsx from "clsx";

import styles from "./styles.module.css";

type OwnProps = {
  images: string[];
};

type Props = Omit<React.ComponentProps<"div">, "children"> & OwnProps;

export const ScrollAnim17 = ({ className, images, ...rest }: Props) => {
  return (
    <div className={clsx(styles.module, className)}>
      <div>
        <div className={styles.kv} {...rest}>
          <div className={styles.kvSlider}>
            {images.map((image, index) => (
              <div key={index} className={styles.kvSliderItem}>
                <div className={styles.kvImgWrapper}>
                  <img className={styles.kvImg} src={image} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.header}>
        <nav>
          <ul className={styles.headerNav}>
            {Array(3)
              .fill(null)
              .map((_, index) => (
                <li key={index}>
                  <a className={styles.headerNavItem} href="#">
                    項目{index}
                  </a>
                </li>
              ))}
          </ul>
        </nav>
        <a className={styles.headerBtn} href="#">
          ボタン
        </a>
      </div>
      <div style={{ height: 1000, padding: 16 }}>
        <p>
          テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
        </p>
      </div>
    </div>
  );
};
