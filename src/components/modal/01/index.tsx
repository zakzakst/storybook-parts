import { useState, useCallback } from "react";

import clsx from "clsx";

import styles from "./styles.module.css";

type OwnProps = {
  thumbnail: string;
  title: string;
};

type Props = React.ComponentProps<"div"> & OwnProps;

export const Modal01 = ({
  className,
  thumbnail,
  title,
  children,
  ...rest
}: Props) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const fixWindow = useCallback(() => {
    const scrollBarWidth = window.innerWidth - document.body.clientWidth;
    // NOTE: storybookでデフォルトで設定されている1remのpaddingを考慮して設定している
    document.body.style.paddingRight = `calc(1rem + ${scrollBarWidth}px)`;
    document.documentElement.style.overflow = "hidden";
  }, []);

  const clearWindow = useCallback(() => {
    document.body.style.paddingRight = "";
    document.documentElement.style.overflow = "";
  }, []);

  const openModal = () => {
    setIsOpenModal(true);
    fixWindow();
  };

  const closeModal = () => {
    setIsOpenModal(false);
    clearWindow();
  };

  return (
    <>
      <button
        className={styles.thumbnail}
        onClick={() => {
          openModal();
        }}
      >
        <img src={thumbnail} alt="" />
        <span className={styles.thumbnailIcon} />
      </button>
      <div
        className={clsx(styles.module, isOpenModal && styles.isOpen, className)}
        {...rest}
      >
        <div
          className={styles.overlay}
          onClick={() => {
            closeModal();
          }}
        />
        <div className={styles.content}>
          <div className={styles.head}>
            <div className={styles.title}>{title}</div>
          </div>
          <div className={styles.body}>{children}</div>
          <button
            className={styles.close}
            aria-label="モーダルを閉じる"
            onClick={() => {
              closeModal();
            }}
          />
        </div>
      </div>
    </>
  );
};
