"use client";

import { useRef } from "react";
import styles from "./styles.module.css";

type Accordion01Item = {
  id: string;
  text: string;
  subText: string;
  content: React.ReactNode;
  name?: string;
};

type ItemProps = Accordion01Item;

const Accordion01Item = ({ name, text, subText, content }: ItemProps) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  return (
    <details className={styles.details} name={name}>
      <summary className={styles.summary}>
        <span className={styles.summaryText}>
          <span>{text}</span>
        </span>
        <span className={styles.summarySubText}>{subText}</span>
        <span className={styles.summaryIcon}></span>
      </summary>
      <div className={styles.content} ref={contentRef}>
        <div className={styles.contentInner}>{content}</div>
      </div>
    </details>
  );
};

type Props = {
  items: Accordion01Item[];
};

export const Accordion01 = ({ items }: Props) => {
  return (
    <div>
      {items.map((item) => (
        <Accordion01Item key={item.id} {...item} />
      ))}
    </div>
  );
};
